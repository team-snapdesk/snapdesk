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

module.exports = roomsController;
