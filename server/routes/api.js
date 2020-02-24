const express = require('express');
const apiRouter = express.Router();

// require in middleware here
const jwtsController = require('../controllers/jwtsController');


apiRouter.get('/user',
  jwtsController.isLoggedIn,
  (req, res) => res.sendStatus(200)
)

// ADD API ROUTES HERE

module.exports = apiRouter; 