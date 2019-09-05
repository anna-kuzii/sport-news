const UserQuery = require('../db/query/UserQuery');

exports.updateProfile = (req, res) => {
  const { email, newEmail, newName } = req.body;
  const fullName = newName.split(' ');

  UserQuery.updateUserProfile(email, newEmail, fullName)
    .then(() => res.status(200).send('Profile was changed'))
    .catch((error) => res.send(error));
};

