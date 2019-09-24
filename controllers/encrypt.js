const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => bcrypt.genSalt(10)
  .then((salt) => bcrypt.hash(password, salt))
  .then((hash) => hash)
  .catch((err) => console.error(err.message));
