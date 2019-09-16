const jwt_decode = require('jwt-decode');

const UserQuery = require('../db/query/UserQuery');

exports.isAuthenticated = (req, res, next) => {
  const decoded = jwt_decode(req.header('Authorization'));
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    res.status(401).json({ message: 'Token has expired' });
  } else {
    UserQuery.findUserByEmail(decoded.email).then( (user) => {
      if (user) {
        next();
      } else {
        res.status(401).json({ message: 'Invalid token' });
      }
    });
  }
};
