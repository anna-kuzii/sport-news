const UserQuery = require('../db/query/UserQuery')
const jwt = require('jsonwebtoken')
const encrypt = require('./encrypt')

exports.receiveNewPassword = (req, res) => {
  const { password, userId, token } = req.body

  UserQuery.findUserId(userId)
    .then(user => {
      const secret = user.password + '-' + user.createdAt
      const payload = jwt.decode(token, secret)

      if (payload.userId === user.id) {
        return encrypt.hashPassword(password)
      }
      return new Error('incorrect token')
    })
    .then((result) => {
      UserQuery.UpdateUserPasswordById(userId, result)
    }).then(() => res.status(200).send('Password changed accepted'))
    .catch((error) => {
      res.status(404).send(error)
    })
}
