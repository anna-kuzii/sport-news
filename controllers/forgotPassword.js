const UserQuery = require('../db/query/UserQuery');
const tokenCreator = require('../controllers/token.js');
const sendEmail = require('../controllers/sendEmail');
const forgotPasswordEmail = require('../templates/forgotPasswordTemplate');

require('dotenv').config();

exports.sendForgotPasswordEmail = (req, res) => {
  UserQuery.findUserByEmail(req.body.email)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: 'No user found with that email address.',
        });
      }
      const token = tokenCreator.usePasswordHashToMakeToken(user.password, user._id, user.date);
      const url = `${process.env.RESET_PASSWORD_URL}/${user._id}/${token}`;

      sendEmail.sendEmail(forgotPasswordEmail.forgotPasswordTemplate(user, url));
      res.status(200).send('email send successful');
    });
};
