const express = require('express');

const router = express.Router();
const encrypt = require('./encrypt');

const User = require('../db/models/User');

router.post('/register', (req, res) => {
  const { firstName } = req.body.first_name;
  const { lastName } = req.body.last_name;
  const { email } = req.body;
  const { password } = req.body;

  req.checkBody('first_name', 'Name is required').notEmpty();
  req.checkBody('last_name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  res.checkBody('password', 'Password is required').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    // TODO: connect to FE and show error
    return errors;
  }
  const newUser = new User({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
  newUser.password = encrypt.encrypt(newUser);
  newUser.save((error) => {
    if (error) {
      // TODO create a callback to frontend
      console.log(error);
      return error;
    }
    // TODO:redirect to login
    res.redirect('./login');
    // that return for lint ,becouse arrow function expected a return
    return false;
  });
  return false;
});

module.exports = router;
