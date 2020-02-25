const axios = require('axios').default;

// import secret
const githubSecret = require('../_secret/githubSecret');

// import access to database
const db = require('../models/userModel');

const githubController = {};

githubController.token = (req, res, next) => {
  axios.post('https://github.com/login/oauth/access_token', {
    client_id: githubSecret.clientId,
    client_secret: githubSecret.clientSecret,
    // temporary code from github based on user login
    code: req.query.code,
  },{
    headers: {
      accept: 'application/json'
    }
  })
    .then(githubRes => {
      res.locals.token = githubRes.data.access_token;
      return next();
    })
    .catch(err => next({
      log: `Error in middleware loginController.token: ${err}`
    }))
};

// Uses token to retrieve information about current user
githubController.userData = (req, res, next) => {
  axios.get('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + res.locals.token
    }
  })
  /**
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   * Destructuring data out response from github
   * then destructing the rest out of data
   */ 
  .then(( { data: { bio, id, name, avatar_url, email } }) => {
    res.locals.userData = { bio, github_id: id, name, avatar_url, email };
    return next();
  })
  .catch(err => ({ log: `Error in middleware loginController.userData axios to github: ${err}` }));
}

githubController.createUser = (req, res, next) => {
try {
  const checkUser = {
    text: `SELECT * FROM users WHERE github_id = $1;`,
    values: [res.locals.userData.github_id]
  };

  const addUser = {
    text: `
      INSERT INTO users (name, email, bio, github_id, avatar_url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING _id;
    `,
    values: [
      res.locals.userData.name,
      res.locals.userData.email,
      res.locals.userData.bio,
      res.locals.userData.github_id,
      res.locals.userData.avatar_url
    ]
  };

  // query data
  db.query(checkUser)
    .then(user => {
      
      // if user doesn't exist in database, add to db
      if(user.rowCount === 0) {
        db.query(addUser)
          .then(success => {
            console.log('SUCCESS: ', success);
            res.locals.userData.id = success.rows[0]._id;
            return next()})
          .catch(err => ({ log: `Error in middleware loginController.createUser db addUser: ${err}` }))
      } else {
        res.locals.userData.id = user.rows[0]._id;
        return next();
      }    
    })
    .catch(err => ({ log: `Error in middleware loginController.createUser db checkUser: ${err}`}))

} catch (err) {
  return next({ log: `Error in middleware loginController.createUser db checkUser: ${err}` })
}
}

module.exports = githubController;