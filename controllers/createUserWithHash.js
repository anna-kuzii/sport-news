const notificationMail = require('../controllers/sendEmail');
const regNotification = require('../templates/registrationNotificationTemplate');
const UserQuery = require('../db/query/UserQuery');
const encrypt = require('./encrypt');


exports.createUserWithHash =(password, req, res) =>{
  return encrypt.hashPassword(password)
    .then((result) => {
      UserQuery.createUser(req.body, result);
      notificationMail.sendEmail(regNotification.sendRegNotification(req.body.email));
    }).then(() => res.status(200).send('new user registered'))
    .catch((error) => res.send(error));
};
