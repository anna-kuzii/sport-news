const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const UserQuery = require('../db/query/UserQuery')
const passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('../db/models/User')
require('dotenv').config()

const opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET_KEY

module.exports = (passport) => (
  passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    UserQuery.findUserById(jwtPayload.id, done)
  })))

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  function (email, password, done) {
    UserQuery.findUserOne(email)
      .then(function (user) {
        if (!user) {
          return done(null, false, {
            message: 'User not found.',
          })
        }
        bcrypt.compare(password, user.password)
          .then(isMatch =>{
            if (isMatch) {
              return done(null, user)
            }
            return done(null, false, {
              message: 'Incorrect password.',
            })
          })
      })
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id)
})
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

module.exports = passport
