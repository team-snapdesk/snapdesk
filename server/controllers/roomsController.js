// import access to database
const db = require("../models/userModel");

const roomsController = {};

roomsController.addRooms = (req, res, next) => {
  console.log("REQUEST BODY: ", req.body);
  const { name, admin } = req.body;
  const addRoom = {
    text: `
      INSERT INTO rooms
      (name, admin_id)
      VALUES
      ($1, $2)
      RETURNING _id, name, admin_id;
    `,
    values: [name, admin]
  };
  db.query(addRoom)
    .then(room => {
      // console.log('ROOM RESPONSE: ', room);
      res.locals.activeRoom = {
        id: room.rows[0]._id,
        name: room.rows[0].name,
        admin: room.rows[0].admin_id
      };
      return next();
    })
    .catch(err =>
      next({
        log: `Error in middleware roomsController.addNewRoom: ${err}`
      })
    );
};

roomsController.getRooms = (req, res, next) => {
  const { userId } = req.params;
  const getRooms = {
    text:
      "SELECT DISTINCT rooms._id as id, rooms.name, rooms.admin_id as admin FROM rooms INNER JOIN rooms_users ON rooms._id=rooms_users.room_id WHERE rooms_users.user_id =$1 AND rooms_users.banned = false",
    values: [userId]
  };
  db.query(getRooms)
    .then(getRooms => {
      res.locals.rooms = getRooms.rows;
      return next();
    })
    .catch(err => {
      return next({
        log: "Error occured in roomsController.getRooms",
        status: 400,
        message: { err: err }
      });
    });
};

roomsController.getActiveRoom = (req, res, next) => {
  const { userId } = req.params;
  const getActiveRoom = {
    text:
      "SELECT rooms._id as id, rooms.name, rooms.admin_id as admin FROM users INNER JOIN rooms ON users.active_room = rooms._id WHERE users._id = $1",
    values: [userId]
  };
  db.query(getActiveRoom)
    .then(activeRoom => {
      res.locals.activeRoom = activeRoom.rows[0];
      return next();
    })
    .catch(err => {
      return next({
        log: "Error occured in roomsController.getActiveRoom",
        status: 400,
        message: { err: err }
      });
    });
};

roomsController.updateActiveRoom = (req, res, next) => {
  const { roomId, userId } = req.body;
  const updateActiveRoom = {
    text: "UPDATE users SET active_room = $1 WHERE _id = $2",
    values: [roomId, userId]
  };
  db.query(updateActiveRoom)
    .then(activeRoom => {
      return next();
    })
    .catch(err => {
      return next({
        log: "Error occured in roomsController.updateActiveRoom",
        status: 400,
        message: { err: err }
      });
    });
};

roomsController.joinRoom = async (req, res, next) => {
  const { roomName, userId } = req.body;
  const getRoomId = {
    text: "SELECT _id FROM rooms WHERE name=$1",
    values: [roomName]
  };
  try {
    let roomId = await db.query(getRoomId);
    roomId = roomId.rows[0]._id;
    const joinRoom = {
      text:
        "INSERT INTO rooms_users (user_id, room_id, banned) VALUES ($1, $2, false)",
      values: [userId, roomId]
    };
    await db.query(joinRoom);
    req.body = { roomId: roomId, userId: userId };
    req.params.userId = userId;
    return next();
  } catch (err) {
    return next({
      log: "Error occured in roomsController.joinRoom",
      status: 400,
      message: { err: err }
    });
  }
};
module.exports = roomsController;
