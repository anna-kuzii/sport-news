const express = require('express');

const router = express.Router();
const encrypt = require('./encrypt');

const User = require('../db/models/User');

router.get('/', (req, res) => {
  // TODO: render a register form
  res.send('it is a register block');
});


router.post('/send', (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
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
  newUser.save().then(
    (error) => (new Error(error)),
    () => (res.redirect('./login')),
  );
  return false;
});

module.exports = router;
