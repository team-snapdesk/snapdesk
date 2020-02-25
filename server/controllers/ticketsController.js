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

ticketsController.getActiveTickets = (req, res, next) => {
  const getActiveTickets= `
    SELECT t._id, t.snaps_given, t.message, t.status, t.timestamp, t.mentee_id, u.name mentee_name
    FROM tickets t
    INNER JOIN users u
    ON u._id = t.mentee_id
    WHERE status = 'active'
    OR status = 'pending';
  `;
  db.query(getActiveTickets)
    .then(({ rows }) => {
      const formatTickets = rows.map(ticket => ({
        messageInput: ticket.message,
        messageRating: ticket.snaps_given,
        messageId: ticket._id,
        menteeId: ticket.mentee_id,
        menteeName: ticket.mentee_name,
        timestamp: ticket.timpestamp,
        status: ticket.status,
        mentorId: ticket.mentor_id || '',
       }))
      res.locals.activeTickets = formatTickets;
      return next();
    })
    .catch(err => next({
      log: `Error in middleware ticketsController.addNewTicket: ${err}`
    }))
}

ticketsController.addTicket = (req, res, next) => {
  const {  snaps_given, mentee_id, status, message } = req.body;
  const addTicket = `
    INSERT INTO tickets
    (snaps_given, mentee_id, status, message, timestamp)
    VALUES
    (${snaps_given}, ${mentee_id}, '${status}', '${message}', NOW())
    RETURNING _id, timestamp, mentee_id;
  `;
  db.query(addTicket)
    .then(ticket => {
      res.locals.ticketId = ticket.rows[0]._id;
      res.locals.timestamp = ticket.rows[0].timestamp;
      res.locals.menteeId = ticket.rows[0].mentee_id; 
      return next();
    })
    .catch(err => next({
      log: `Error in middleware ticketsController.addNewTicket: ${err}`
    }))
}


ticketController.deleteTicket = (req, res, next) => {

}

module.exports = ticketsController;