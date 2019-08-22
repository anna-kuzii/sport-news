const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const UserQuery = require('../db/query/UserQuery');
require('dotenv').config();

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

module.exports = (passport) => (
  passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    UserQuery.findUserById(jwtPayload.id, done);
  })));
