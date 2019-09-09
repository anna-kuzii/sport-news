const { validationResult } = require('express-validator');
const UserQuery = require('../db/query/UserQuery');
const UserWithHash = require('./createUserWithHash');

exports.registerController = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Invalid input' });
  }
  const { password, email } = req.body;

  return UserQuery.findUserByEmail(email)
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: 'Email already exist',
        });
      }
      return UserWithHash.createUserWithHash(password, req, res);
    });
};
