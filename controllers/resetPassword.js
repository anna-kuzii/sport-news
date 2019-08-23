const User = require('../db/models/User')

const jwt = require('jsonwebtoken')
const encrypt = require('./encrypt')

exports.receiveNewPassword = (req, res) => {
  const { userId, token } = req.params
  //const { password, userId, token } = req.body
  const { password } = req.body
  
  User.findOne({ _id: userId })
    .then(user => {
      const secret = user.password + '-' + user.createdAt
      const payload = jwt.decode(token, secret)
      if (payload.userId === user.id) {
        encrypt.hashPassword(password)
          .then((result) => {
            User.findOneAndUpdate({ _id: userId }, { password: result })
          }).then(() => res.status(200).send('Password changed accepted'))
          .catch((error) => res.send(error))
      }
    })
    .catch(() => {
      res.status(404).json('Invalid user')
    })
}
