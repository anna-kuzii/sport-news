const mongoose = require('mongoose');
const User = require('../db/models/User');

const encrypt = require('./encrypt');

exports.registerController = (req, res) => {
  const {
    first_name: firstName, last_name: lastName, email, password,
  } = req.body;

  // TODO: VALIDATION
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
};
