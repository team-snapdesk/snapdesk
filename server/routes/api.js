const express = require('express');
const apiRouter = express.Router();

// require in middleware here
const jwtsController = require('../controllers/jwtsController');
const userController = require('../controllers/userController');


apiRouter.get('/user',
  jwtsController.isLoggedIn,
  userController.getData,
  (req, res) => res.status(200).json(res.locals)
)

// ADD API ROUTES HERE

module.exports = apiRouter; 