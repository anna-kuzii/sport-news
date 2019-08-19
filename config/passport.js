const LocalStrategy = require('passport-local').Strategy;

const User = require('../db/models/User');

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, false);
        return done(null, user);
      });
    });
  }));
};
