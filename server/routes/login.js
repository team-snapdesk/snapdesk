const express = require('express');
const loginRouter = express.Router();

// import controllers
const loginController = require('../controllers/loginController');

// import secrets
const githubSecret = require('../_secret/githubSecret');

// first step of github oauth, direct user to github login page
loginRouter.get('/', (req, res) => {
  const url = 'https://github.com/login/oauth/authorize?' + 
    'scope=user&' +
    'redirect_uri=http://localhost:3000/login/callback&' +
    `client_id=${githubSecret.clientId}`;

  return res.redirect(url);
});

// redirect from github including the temporary code from user
loginRouter.get('/callback',
  loginController.token,
  // loginController.createUser,
  (req, res) => {
    res.status(200).json(res.locals.token)
  }
)


// ADD API ROUTES HERE

module.exports = loginRouter; 