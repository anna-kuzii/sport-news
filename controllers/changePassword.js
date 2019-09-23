const UserQuery = require('../db/query/UserQuery');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const encrypt = require('./encrypt');
const bcrypt = require('bcryptjs');

exports.changePassword = (req, res) => {
  const { oldPassword, password } = req.body;
  const decoded = jwt.decode(req.header('Authorization'));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Your password must be at least 5 characters ' });
  }

  UserQuery.findUserId(decoded._id)
    .then( user => {
      bcrypt.compare(oldPassword, user.password).then(
        (result)=> {
          if (result) {
            return encrypt.hashPassword(password);
          }
          return res.status(404).json({ message: 'Wrong password' });
        }
      ).then(result =>{
        UserQuery.UpdateUserPasswordById(decoded._id, result)
          .then(() => res.status(200).json('Password changed accepted'));
      }).catch(error => res.send(error));
    })
    .catch(() => {
      res.status(404).json({ message: 'Wrong user' });
    });
};
