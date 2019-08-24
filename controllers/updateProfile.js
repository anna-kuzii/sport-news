const UserQuery = require('../db/query/UserQuery')

exports.updateProfile = (req, res) => {
  UserQuery.updateUserProfile(req, res)
}
