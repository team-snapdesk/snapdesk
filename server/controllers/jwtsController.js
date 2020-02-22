/**
 * ************************************
 *
 * @author Joshua and Jessikee
 * @date 2/21/20
 * @description using javascript webtokens for sessions
 *
 * ************************************
 */
const jwt = require('jsonwebtoken');
const jwtSecret = require('../_secret/jwtSecret');


jwtsController = {};

jwtsController.loginUser = (req, res, next) => {
  try {
    //create payload
    const payload = { github_id: res.locals.userData.id };
    //create jwt token 
    const token = jwt.sign(payload, jwtSecret.secret);
    res.cookie("jwt_token", token, { httpOnly: true });
    return next()
  } catch (err) {
    return next({ log: `Error in middleware jwtsController.loginUser: ${err}` });
  }
};
jwtsController.isLoggedIn = (req, res, next) => {
  try {
    jwt.verify(req.cookies.jwt_token, jwtSecret.secret, (err, data) => {
      if (err) return res.redirect('/login');
      return next();
    })
  } catch (err) {
    return next({ log: `Error in middleware jwtsController.isLoggedIn: ${err}` });
  }
};

module.exports = jwtsController;