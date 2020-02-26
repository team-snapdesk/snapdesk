// import access to database
const db = require('../models/userModel');

const roomsController = {};

roomsController.addRooms = (req, res, next) => {
  const { name, admin } = req.body;
  const addRoom = {
    text: `
      INSERT INTO rooms
      (name, admin)
      VALUES
      ($1, $2)
      RETURNING _id, name, admin;
    `,
    values: [name, admin]
  };
  db.query(addRoom)
    .then((room) => {
      res.locals.roomId = room.rows[0]._id;
      res.locals.roomName = room.rows[0].roomName;
      res.locals.roomAdmin = room.rows[0].roomAdmin;
      return next();
    })
    .catch((err) =>
      next({
        log: `Error in middleware roomsController.addNewRoom: ${err}`
      })
    );
};

module.exports = roomsController;
