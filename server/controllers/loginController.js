const axios = require('axios').default;

// import secret
const jwtSecret = require('../_secret/jwtSecret');
const githubSecret = require('../_secret/githubSecret');


const loginController = {};

loginController.token = (req, res, next) => {
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
}

module.exports = loginController;