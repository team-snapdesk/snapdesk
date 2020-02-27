const express = require('express');

const loginRouter = express.Router();

// import controllers
const githubController = require('../controllers/githubController');
const jwtsController = require('../controllers/jwtsController');

// import secrets
const githubSecret = require('../_secret/githubSecret');

// first step of github oauth, direct user to github login page
loginRouter.get('/oauth', (req, res) => {
    const url =
        'https://github.com/login/oauth/authorize?' +
        'scope=user&' +
        'redirect_uri=http://localhost:3000/login/callback&' +
        `client_id=${githubSecret.clientId}`;

    return res.redirect(url);
});

// redirect from github including the temporary code from user
loginRouter.get(
    '/callback',
    githubController.token,
    githubController.userData,
    githubController.createUser,
    jwtsController.loginUser,
    (req, res) => {
        if (process.env.NODE_ENV === 'production') {
            res.redirect('/');
        } else {
            res.redirect('http://localhost:8080');
        }
    }
);

loginRouter.get('/verify', jwtsController.isLoggedIn, (req, res) => {
    res.status(200).json(res.locals);
});

module.exports = loginRouter;
