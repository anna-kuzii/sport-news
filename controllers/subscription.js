const UserQuery = require('../db/query/UserQuery')
const sendEmail = require('../controllers/sendEmail')
const subscriptionEmail = require('../templates/subscriptionTemplate')
require('dotenv').config()

exports.sendSubscriptionEmail = (req, res) => {
  return UserQuery.findUserByEmail(req.body.email)
    .then((user) => {
      // if (!user) {
      //   return res.status(400).json({
      //     message: 'No user found with that email address.',
      //   })
      // }
      
      sendEmail.sendEmail(subscriptionEmail.subscriptionTemplate(req.body.email))
        res.status(200).send('email send successful')
    })
}
