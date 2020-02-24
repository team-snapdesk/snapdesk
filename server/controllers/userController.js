/**
 * ************************************
 *
 * @author Joshua
 * @date 2/23/20
 * @description any server information associated with the user
 *
 * ************************************
 */
const jwt = require('jsonwebtoken');
const jwtSecret = require('../_secret/jwtSecret');

// import access to database
const db = require('../models/userModel');

const userController = {};

userController.getData = (req, res, next) => {
  // // make sure user is logged in before fetching data
  // if (!res.locals.isLoggedIn) return next();
  // pull github_id from fwts token
  const { github_id } = jwt.verify(req.cookies.jwt_token, jwtSecret.secret);
  // query data base with github id
  const userQuery = `SELECT * FROM users WHERE github_id = ${github_id}`;
  db.query(userQuery)
    .then(user => {
      console.log(user);
      res.locals.user = user.rows[0];
      return next();
    })
    .catch(err => next({ 
      log: `Error in middleware userController.getData: ${err}` 
    }));
}

 module.exports = userController;