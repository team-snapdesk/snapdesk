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
  const {
    id
  } = jwt.verify(req.cookies.jwt_token, jwtSecret.secret);
  // query data base with github id
  const userQuery = {
    text: `SELECT * FROM users WHERE _id = $1`,
    values: [id]
  };

  db.query(userQuery)
    .then(user => {
      res.locals.user = user.rows[0];
      return next();
    })
    .catch(err => next({
      log: `Error in middleware userController.getData: ${err}`
    }));
}

userController.getAllRooms = (req, res, next) => {
  const {
    userId
  } = req.params;
  const userRooms = {
    text: 'SELECT rooms.* FROM rooms INNER JOIN rooms_users ON rooms._id=rooms_users.room_id WHERE rooms_users.user_id = {$1} AND rooms_users.banned = false',
    params: [userId]
  }
  db.query(userRooms)
    .then((userRooms) => {
      console.log(userRooms);
      // FIGURE OUT THE SOMETHING
      res.locals.userRooms = data.something;
      return next();
    })
    .then((err) => {
      console.log(err)
      log: `Error in middleware userController.getAllRooms: ${err}`
    })
}

userController.getActiveRoom = (req, res, next) => {
  const {
    userId
  } = req.params;
  const getActiveRoom = {
    text: 'SELECT active_room FROM users WHERE _id = {$1}',
    params: [userId]
  }
  db.query(getActiveRoom)
    .then((activeRoom) => {
      console.log(activeRoom);
      // FIGURE OUT THE SOMETHING
      res.locals.activeRoomStatus = data.something;
      return next();
    })
    .then((err) => {
      console.log(err)
      log: `Error in middleware userController.getActiveRoom: ${err}`
    })
}

userController.updateActiveRoom = (req, res, next) => {
  const {
    active_room,
    userId
  } = req.body;
  const updateActiveRoom = {
    text: 'UPDATE users SET active_room = {$1} WHERE _id = {$2}',
    params: [active_room, userId]
  }
  db.query(updateActiveRoom)
    .then((activeRoom) => {
      console.log(activeRoom);
      // FIGURE OUT THE SOMETHING
      res.locals.ActiveRoomStatus = data.something;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in middleware userController.updateActiveRoom: ${err}`
      })
    })
}

module.exports = userController;