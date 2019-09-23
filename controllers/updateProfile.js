const UserQuery = require('../db/query/UserQuery');
const jwt = require('jsonwebtoken');
const constants = require('../constants/common.constants');

exports.updateProfile = (req, res) => {
  const { _id, email, newEmail, newName } = req.body;
  const fullName = newName.split(' ');

  UserQuery.updateUserProfile(email, newEmail, fullName)
    .then(() => {
      const payload = {
        _id: _id,
        firstName: fullName[0],
        lastName: fullName[1],
        email: email,
      };

      return jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: constants.expireTime,
      }, (err, token) => {
        res.json({
          success: true,
          accessToken: token,
        });
      }
      );
    })
    .catch((error) => res.send(error));
};
