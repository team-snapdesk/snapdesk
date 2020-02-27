const db = require('../models/userModel');

adminController = {};

adminController.getBanList = (req, res, next) => {
  db.query('ENTER SQL QUERY HERE MOTHERFUCKER')
    .then((data) => {
      console.log(data);
      // FINISH THIS EQUATION MOTHERFUCKER
      // ALSO FIGURE OUT IF THESE ARE THE BEST NAMES
      res.locals.banList = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in middleware adminController.getBanList: ${err}`
      });
    });
};

adminController.updateBanList = (req, res, next) => {
  db.query('ENTER SQL QUERY HERE MOTHERFUCKER')
    .then((data) => {
      console.log(data);
      // FINISH THIS EQUATION MOTHERFUCKER
      // ALSO FIGURE OUT IF THESE ARE THE BEST NAMES
      res.locals.banList = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error in middleware adminController.updateBanList: ${err}`
      });
    });
};

module.exports = adminController;