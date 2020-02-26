const db = require('../models/userModel');

const leaderboardController = {};

leaderboardController.getLeaderBoard = (req, res, next) => {
    const getLeaderBoard = {
        text:`
        SELECT snaps_given, mentor_id, users.name
        FROM tickets 
        INNER JOIN users ON users._id = mentor_id
        WHERE status = 'resolved'
        ORDER BY snaps_given desc
        LIMIT 10;`}

    db.query(getLeaderBoard)
        .then(data => {
            return next();
        })
        .catch(err => next({ 
            log: `Error in middleware leaderboardController.getLeaderBoard: ${err}` 
          }))
};


leaderboardController.byTopic = (req, res, next) => {
    const topic = JSON.stringify(req.body.topic)
    const text =  `SELECT mentor_id, users.name, topic, SUM(snaps_given)
        FROM tickets
        INNER JOIN users ON users._id=mentor_id
        WHERE status = 'resolved' AND topic = $1
        GROUP BY mentor_id, users.name, topic
        ORDER BY sum DESC
				LIMIT 5;`;
				
				const values = [topic];

    db.query(text, values)
    .then((result) =>{
        return next();
    })
    .catch(err =>{
      console.log('Error: ', err);
      return next(err);
    });
};

module.exports = leaderboardController;