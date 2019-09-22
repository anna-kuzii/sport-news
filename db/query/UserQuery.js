const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

exports.findUserById = (id, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => console.error(err));
};

exports.createUser = (user, hashPassword) => {
  const {
    firstName: firstName, lastName: lastName, email,
  } = user;

  const newUser = new User({
    _id: new mongoose.Types.ObjectId().toHexString(),
    firstName: firstName,
    lastName: lastName,
    email,
    password: hashPassword,
  });

  return newUser.save();
};


exports.updateUserProfile = (email, newEmail, fullName) =>
  User.findOneAndUpdate({ email: email }, { firstName: fullName[1], lastName: fullName[0], email: newEmail });

exports.findUserByEmail = (email) => User.findOne({ email });

exports.findUserId = (id) => User.findOne({ _id: id });

exports.UpdateUserPasswordById = (id, password) =>
  User.findOneAndUpdate({ _id: id }, { password: password }).exec();

