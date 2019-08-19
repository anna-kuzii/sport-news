const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const findById = require('../db/query/findById.js');

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = (passport) => (
  passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    findById.findUser(jwtPayload.id, done);
  })));
