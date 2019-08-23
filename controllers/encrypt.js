const bcrypt = require('bcryptjs')

// TODO: change console.log to FE function
exports.hashPassword = (password) => bcrypt.genSalt(10)
  .then((salt) => bcrypt.hash(password, salt))
  .then((hash) => hash)
  .catch((err) => console.error(err.message))
