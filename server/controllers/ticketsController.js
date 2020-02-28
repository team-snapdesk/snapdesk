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
const db = require("../models/userModel");

const ticketsController = {};

ticketsController.getActiveTickets = (req, res, next) => {
  //pass in active room id from front end and query from that

  const getActiveTickets = {
    text: `SELECT tickets.*, users.name as mentee_name from TICKETS
    LEFT OUTER JOIN USERS
    ON tickets.mentee_id=users._id
    WHERE (status='pending'
    OR status='active')
    AND tickets.room_id=$1`,
    values: [req.params.roomId]
  };
  db.query(getActiveTickets)
    .then(({ rows }) => {
      const formatTickets = rows.map(ticket => ({
        messageInput: ticket.message,
        messageRating: ticket.snaps_given,
        messageId: ticket._id,
        menteeId: ticket.mentee_id,
        menteeName: ticket.mentee_name,
        timestamp: ticket.timestamp,
        status: ticket.status,
        mentorId: ticket.mentor_id || ""
      }));
      res.locals.activeTickets = formatTickets;
      return next();
    })
    .catch(err =>
      next({
        log: `Error in middleware ticketsController.addNewTicket: ${err}`
      })
    );
};

ticketsController.addTicket = (req, res, next) => {
  console.log("ADD TICKET: ", req.body);
  const { snaps_given, mentee_id, status, message, room_id } = req.body;
  const addTicket = {
    text: `
      INSERT INTO tickets
      (snaps_given, mentee_id, status, message, timestamp, room_id)
      VALUES
      ($1, $2, $3, $4, NOW(), $5)
      RETURNING _id, timestamp, mentee_id;
    `,
    values: [snaps_given, mentee_id, status, message, room_id]
  };
  db.query(addTicket)
    .then(ticket => {
      res.locals.ticketId = ticket.rows[0]._id;
      res.locals.timestamp = ticket.rows[0].timestamp;
      res.locals.menteeId = ticket.rows[0].mentee_id;
      return next();
    })
    .catch(err =>
      next({
        log: `Error in middleware ticketsController.addNewTicket: ${err}`
      })
    );
};

ticketsController.updateTicketStatus = (req, res, next) => {
  console.log("UPDATE REQ BODY: ", req.body);
  const { ticketId, status, mentorId } = req.body;
  const updateTicket = {
    text: `
      UPDATE tickets
      SET status = $1, mentor_id = $3
      WHERE _id = $2;
    `,
    values: [status, ticketId, mentorId]
  };

  db.query(updateTicket)
    .then(success => next())
    .catch(err =>
      next({
        log: `Error in middleware ticketsController.updateTicket: ${err}`
      })
    );
};

module.exports = ticketsController;
