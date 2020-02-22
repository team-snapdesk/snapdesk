const express = require('express');
const loginRouter = express.Router();

// import controllers
const githubController = require('../controllers/githubController');

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
  githubController.token,
  githubController.userData,
  githubController.createUser,
  (req, res) => {
    res.status(200).json(res.locals.userData)
  }
)


// ADD API ROUTES HERE

module.exports = loginRouter; 