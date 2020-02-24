/**
 * ************************************
 *
 * @author Joshua
 * @date 2/21/20
 * @description get tickets data from db middleware
 *
 * ************************************
 */

// import access to database
const db = require('../models/userModel');

const ticketsController = {};

ticketsController.addNewTicket = (req, res, next) => {
  const {  snaps_given, mentee_id, status, message, } = req.body;
  const addTicket = `
    INSERT INTO tickets
    (snaps_given, mentee_id, status, message, timestamp)
    VALUES
    (${snaps_given}, ${mentee_id}, ${status}, ${message}, NOW())
    RETURNING _id, timestamp;
  `;
  db.query(addTickets)
    .then(ticket => {
      res.locals.ticketId = ticket.rows[0]._id;
      res.locals.ticketId = ticket.rows[0].timestamp;
      return next();
    })
    .catch(err => ({
      log: `Error in middleware ticketsController.addNewTicket: ${err}`
    }))
}

module.exports = ticketsController;