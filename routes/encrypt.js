const bcrypt = require('bcryptjs');


exports.encrypt = (newUser) => bcrypt.genSalt(10, (err, salt) => {
  const { password } = newUser;

  bcrypt.hash(password, salt, (err1, hash) => {
    if (err1) {
      return (err1);
    }
    return hash;
  });
});
