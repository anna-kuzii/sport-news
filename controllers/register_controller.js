
const { validationResult } = require('express-validator');
const User = require('../db/models/User');
const createUser = require('../db/query/createUser');
const encrypt = require('./encrypt');


exports.registerController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  return User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        console.log(User.findOne({ email }));
        return res.status(400).json({
          email: 'Email already exist',
        });
      }


      return encrypt.hashPassword(password)
        .then((result) => {
          createUser.createUser(req.body, result);
        }).then(() => res.status(200).send('new user registered'))
        .catch((error) => res.send(error));
    });
};
