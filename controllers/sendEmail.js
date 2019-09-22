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

  sendEmail(message);
};
