const mongoose = require('mongoose');
const User = require('../db/models/User');
const encrypt = require('./encrypt');

exports.register_controller = (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const { email } = req.body;
  const { password } = req.body;

  // TODO: VALIDATION
  encrypt.hashPassword(password)
    .then(() => {
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
    });

  return false;
};
