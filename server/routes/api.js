const express = require('express');

const apiRouter = express.Router();

// require in middleware here
const jwtsController = require('../controllers/jwtsController');
const userController = require('../controllers/userController');
const ticketsController = require('../controllers/ticketsController');
const roomsController = require('../controllers/roomsController');

// ADD API ROUTES HERE
apiRouter.get('/user', jwtsController.isLoggedIn, userController.getData, (req, res) =>
  res.status(200).json(res.locals)
);

// Get all rooms for user, including active room
apiRouter.put('/user', jwtsController.isLoggedIn, userController.getAllRooms, userController.getActiveRoom, (req, res) =>
  res.status(200).json(res.locals.userRooms)
);

apiRouter.put('/user', jwtsController.isLoggedIn, userController.updateActiveRoom, (req, res) =>
  res.status(200).json(res.locals.activeRoomStatus)
);

apiRouter.put(
  '/tickets/delete',
  jwtsController.isLoggedIn,
  ticketsController.updateTicketStatus,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.get(
  '/tickets',
  jwtsController.isLoggedIn,
  ticketsController.getActiveTickets,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.post('/tickets', jwtsController.isLoggedIn, ticketsController.addTicket, (req, res) =>
  res.status(200).json(res.locals)
);

apiRouter.post('/rooms', jwtsController.isLoggedIn, roomsController.addRooms, (req, res) => {
  console.log('END OF ROOMS POST REQUEST', res.locals);
  res.status(200);
});

apiRouter.get('/rooms/:userId', jwtsController.isLoggedIn, roomsController.getRooms, (req, res) =>
  res.status(200).json()
);

// apiRouter.get('/', jwtsController.isLoggedIn, adminController.getBannedList, (req, res) => {
//   res.status(200).json(res.locals)
// })

// apiRouter.get('/', jwtsController.isLoggedIn, adminController.updateBannedList, (req, res) => {
//   res.status(200).json(res.locals)
// })

module.exports = apiRouter;