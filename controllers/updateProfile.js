const User = require('../db/models/User')
const UserQuery = require('../db/query/UserQuery')

exports.updateProfile = (req, res) => {
  const { email, newEmail, newName } = req.body
  const fullName = newName.split(' ')
  User.findOneAndUpdate({ email:email }, { first_name:fullName[1], last_name: fullName[0], email:newEmail })
    .then(() => console.log('changed'))
    .catch((error) => res.send(error))

  UserQuery.findUserOne(newEmail)
    .then((user) => console.log(user))

}
