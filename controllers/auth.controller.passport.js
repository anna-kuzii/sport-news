const jwt = require('jsonwebtoken')
const passport = require('passport')

const constants = require('../constants/common.constants');

require('dotenv').config()

exports.authPassport = (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user   : user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      const payload = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      }

      return jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: constants.expireTime
          }, (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
      );
    })
  })(req, res)
}
