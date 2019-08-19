const User = require('../models/User');

exports.findUser = (id, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => console.error(err));
};
