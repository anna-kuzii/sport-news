const jwt =require('jsonwebtoken')

exports.usePasswordHashToMakeToken = ( passwordHash, userId, createdAt) => {
  const secret = passwordHash + '-' + createdAt
  const token = jwt.sign({ userId }, secret, {
    expiresIn: 3600,
  })
  return token
}
