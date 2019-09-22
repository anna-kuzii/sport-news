const UserQuery = require('../db/query/UserQuery');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const encrypt = require('./encrypt');

exports.receiveNewPassword = (req, res) => {
  const { password, userId, token } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Your password must be at least 5 characters ' });
  }
  UserQuery.findUserId(userId)
    .then(user => {
      const secret = user.password + '-' + user.createdAt;
      const payload = jwt.decode(token, secret);

      if (payload.userId === user.id) {
        return encrypt.hashPassword(password);
      }
      return new Error('incorrect token');
    })
    .then((result) => {
      UserQuery.UpdateUserPasswordById(userId, result);
    }).then(() => res.status(200).json('Password changed accepted'))
    .catch(() => {
      res.status(404).json({ message: 'No user with this id' });
    });
};
