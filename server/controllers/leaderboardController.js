const db = require('../models/userModel');

const leaderboardController = {};

leaderboardController.getLeaderBoard = (req, res, next) => {
    const getLeaderBoard = `
        SELECT snaps_given, mentor_id, users.name
        FROM tickets 
        INNER JOIN users ON users._id = mentor_id
        WHERE status = 'resolved'
        ORDER BY snaps_given desc
        LIMIT 10;
    `;

    db.query(getLeaderBoard)
        .then(data => {
            return next();
        })
        .catch(err => next({ 
            log: `Error in middleware leaderboardController.getLeaderBoard: ${err}` 
          }))
}

module.exports = leaderboardController;

