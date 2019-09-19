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
<<<<<<< HEAD

=======
>>>>>>> e537f4b76b5bf726eae37fdf93f7263d5bcfe5e3
  // TODO remove console.log

  sendEmail(message)
<<<<<<< HEAD
    .then((info) => { console.log(info); } )
    .catch((err) => { console.log('got error'); console.log(err); } );
=======
    .then((info) => { console.log(info); })
    .catch((err) => { console.log(err); });
>>>>>>> e537f4b76b5bf726eae37fdf93f7263d5bcfe5e3
};
