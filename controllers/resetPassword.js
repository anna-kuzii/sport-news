const UserQuery = require('../db/query/UserQuery')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const encrypt = require('./encrypt')

exports.receiveNewPassword = (req, res) => {
  const { password, confirm_password , userId, token } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: 'Your password must be a-z,A-Z  and at least 5 characters ' })
    }
    if(password !== confirm_password) {
        return res.status(423).json({ message: 'Passwords need to match' })
    }
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
