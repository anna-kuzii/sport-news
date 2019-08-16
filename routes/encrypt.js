const bcrypt = require('bcryptjs');


exports.encrypt = (newUser) => new Promise((resolve, reject) => {
  setTimeout(() => {
    bcrypt.genSalt(10, (err, salt) => {
      const { password } = newUser;
      bcrypt.hash(password, salt, (err1, hash) => {
        if (err1) reject(new Error(err1));
        resolve(hash);
      });
    });
  });
});
