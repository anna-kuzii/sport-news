const jwt =require('jsonwebtoken');

const expiresTime = 3600;

exports.usePasswordHashToMakeToken = ( passwordHash, userId, createdAt) => {
  const secret = passwordHash + '-' + createdAt;
<<<<<<< HEAD

  const token = jwt.sign( { userId }, secret, {
=======
  const token = jwt.sign({ userId }, secret, {
>>>>>>> e537f4b76b5bf726eae37fdf93f7263d5bcfe5e3
    expiresIn: expiresTime,
  });

  return token;
};
