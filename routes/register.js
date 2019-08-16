const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const encrypt = require('./encrypt');

const User = require('../db/models/User');

router.get('/', (req, res) => {
  // TODO: render a register form
  res.send('it is a register block');
});


router.post('/', (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const { email } = req.body;
  const { password } = req.body;

  // TODO: VALIDATION

  const newUser = new User({
    _id: new mongoose.Types.ObjectId().toHexString(),
    first_name: firstName,
    last_name: lastName,
    email,
    password: encrypt.hashPassword(password),
  });


  newUser.save()
    .then(() => (res.status(200).send('new user registered')))
    .catch((error) => (res.send(error)));

  return false;
});

module.exports = router;
