const UserQuery = require('../db/query/UserQuery')
const tokenCreator = require('../controllers/token.js')
const sendEmail = require('../controllers/sendEmail')
const forgotPasswordEmail = require('../templates/forgotPasswordTemplate')

exports.sendForgotPasswordEmail = (req, res) => {
  console.log(req.body.email)
  return UserQuery.findUserOne(req.body.email)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: 'No user found with that email address.',
        })
      }
      const token = tokenCreator.usePasswordHashToMakeToken(user.password, user._id, user.date)
      const url = `http://localhost:5000/resetpassword/${user._id}/${token}`
      //TODO : add a beatifull email
      sendEmail.sendEmail(forgotPasswordEmail.forgotPasswordTemplate(user, url))
    })
}