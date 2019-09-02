const jwt =require('jsonwebtoken')
const UserQuery = require('../db/query/UserQuery')

require('dotenv').config()

export default (req, res, next) => {
  const authorizationHeader = req.headers['Authorization']
  let token

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1]
  }

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' })
      } else {
        UserQuery.findUserByEmail(decoded.email)
          .fetch().then(user => {
            if (!user) {
              res.status(404).json({ error: 'No such user' })
            } else {
              next()
            }
          })
      }
    })
  } else {
    res.status(403).json({
      error: 'No token provided',
    })
  }
}
