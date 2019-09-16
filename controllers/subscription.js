const UserQuery = require('../db/query/UserQuery');
const sendEmail = require('../controllers/sendEmail');
const subscriptionEmail = require('../templates/subscriptionTemplate');

require('dotenv').config();

exports.sendSubscriptionEmail = (req, res) => {
  UserQuery.findUserByEmail(req.body.email)
    .then(() => {
      sendEmail.sendEmail(subscriptionEmail.subscriptionTemplate(req.body.email));
      res.status(200).send('email send successful');
    });
};
