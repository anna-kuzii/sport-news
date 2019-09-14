const nodemailer = require('nodemailer-promise');

require('dotenv').config();

exports.sendEmail = (message) => {
  const sendEmail = nodemailer.config({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
  // TODO remove console.log

  sendEmail(message)
    .then((info) => { console.log(info); })
    .catch((err) => { console.log('got error'); console.log(err); });
};
