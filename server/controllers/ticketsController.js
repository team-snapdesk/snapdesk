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
  const getActiveTickets = `
    SELECT t._id, t.snaps_given, t.message, t.status, t.timestamp, t.mentee_id, u.name mentee_name
    FROM tickets t
    INNER JOIN users u
    ON u._id = t.mentee_id
    WHERE status = 'active'
    OR status = 'pending'
    ORDER BY t._id;
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
        mentorId: ticket.mentor_id || ''
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
  const { mentee_id, status, message } = req.body;
  const snaps_given = Number(req.body.snaps_given);
  console.log('addTicketNumberTest: ', typeof snaps_given);
  const addTicket = {
    text: `
      INSERT INTO tickets
      (snaps_given, mentee_id, status, message, timestamp)
      VALUES
      ($1, $2, $3, $4, NOW())
      RETURNING _id, timestamp, mentee_id;
    `,
    values: [snaps_given, mentee_id, status, message]
  };

  console.log(addTicket.values);
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
  const { ticketId, status } = req.body;
  const updateTicket = {
    text: `
      UPDATE tickets
      SET status = $1
      WHERE _id = $2;
    `,
    values: [status, ticketId]
  };

  console.log(updateTicket);

  db.query(updateTicket)
    .then(success => {
      console.log(success);
      // res.locals.tickets = success
      return next();
    })
    .catch(err =>
      next({
        log: `Error in middleware ticketsController.updateTicket: ${err}`
      })
    );
};

ticketsController.getOrganizationTickets = (req, res, next) => {
  const { organization_id } = req.body;
  const getOrganizationTicket = {
    text: `
        SELECT * FROM tickets
        WHERE organization_id = $1
        `,
    values: [organization_id]
  };
  db.query(getOrganizationTicket)
    .then(tickets => {
      res.locals.tickets = tickets;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error in middleware ticketsController.getOrganizationTickets: ${err}`
      });
    });
};

ticketsController.getUsersInOrganization = (req, res, next) => {
  const { user_id } = req.body;
  const getUsersInOrganization = {
    text: `
    SELECT * FROM organizations 
    JOIN users 
    ON user_id= users._id;
    `,
    values: [user_id]
  };
  db.query(getUsersInOrganization)
    .then(users => {
      res.locals.users = users;
      return next();
    })
    .catch(err => {
      return next({
        log: `Error in middleware ticketsController.getUsersInOrganization: ${err}`
      });
    });
  };

module.exports = ticketsController;
