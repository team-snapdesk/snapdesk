const express = require('express');

const apiRouter = express.Router();

// require in middleware here
const jwtsController = require('../controllers/jwtsController');
const userController = require('../controllers/userController');
const ticketsController = require('../controllers/ticketsController');

// ADD API ROUTES HERE
apiRouter.get('/user',
  jwtsController.isLoggedIn,
  userController.getData,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter

apiRouter.get('/tickets',
    jwtsController.isLoggedIn,
    ticketsController.getActiveTickets,
    (req, res) => res.status(200).json(res.locals)
  )
  .post(
    jwtsController.isLoggedIn,
    ticketsController.addTicket,
    (req, res) => res.status(200).json(res.locals)
  )
  .put(
    jwtsController.isLoggedIn,
    (req, res) => res.status(200).json(res.locals)
  )




module.exports = apiRouter;
