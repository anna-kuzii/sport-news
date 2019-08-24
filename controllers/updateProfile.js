const UserQuery = require('../db/query/UserQuery')

exports.updateProfile = (req, res) => {
  UserQuery.updateUserProfile(req)
    .then(() => res.status(200).send('Profile was changed'))
    .catch((error) => res.send(error))
}
