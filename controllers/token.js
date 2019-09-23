const jwt =require('jsonwebtoken');

const expiresTime = 3600;

exports.usePasswordHashToMakeToken = ( passwordHash, userId, createdAt) => {
  const secret = passwordHash + '-' + createdAt;

  return jwt.sign({ userId }, secret, {
    expiresIn: expiresTime,
  });
};
