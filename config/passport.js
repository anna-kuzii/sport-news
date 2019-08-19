const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const UserQuery = require('../db/query/UserQuery');

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = (passport) => (
  passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    UserQuery.findUserById(jwtPayload.id, done);
  })));
