const notificationMail = require('../controllers/sendEmail');
const regNotification = require('../templates/registrationNotificationTemplate');
const { validationResult } = require('express-validator');
const UserQuery = require('../db/query/UserQuery');
const encrypt = require('./encrypt');


exports.registerController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { password, email } = req.body;
  return UserQuery.findUserOne(email)
    .then((user) => {
      if (user) {
        return res.status(400).json({
           message: 'Email already exist',
        });
      }
      return encrypt.hashPassword(password)
        .then((result) => {
          UserQuery.createUser(req.body, result);
            notificationMail.sendEmail(regNotification.sendRegNotification(req.body.email));
        }).then(() => res.status(200).send('new user registered'))
        .catch((error) => res.send(error));
    });
};

