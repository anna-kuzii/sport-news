const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const User = require('../db/models/User');

const encrypt = require('./encrypt');


exports.registerController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    first_name: firstName, last_name: lastName, email, password,
  } = req.body;
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
          const newUser = new User({
            _id: new mongoose.Types.ObjectId().toHexString(),
            first_name: firstName,
            last_name: lastName,
            email,
            password: result,
          });
          return newUser.save();
        }).then(() => res.status(200).send('new user registered'))
        .catch((error) => res.send(error));
    });
};
