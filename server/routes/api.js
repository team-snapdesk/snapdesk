const express = require('express');

const apiRouter = express.Router();

// ADD API ROUTES HERE
apiRouter.get(
  '/',
  // add middleware here
  (req, res) => res.sendStatus(200)
);

module.exports = apiRouter;
