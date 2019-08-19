const mongoose = require('mongoose');
const User = require('../models/User');

exports.createUser = (user, hashPassword) => {
  const {
    first_name: firstName, last_name: lastName, email,
  } = user;
  const newUser = new User({
    _id: new mongoose.Types.ObjectId().toHexString(),
    first_name: firstName,
    last_name: lastName,
    email,
    password: hashPassword,
  });
  return newUser.save();
};
