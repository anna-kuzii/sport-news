const nodemailer = require('nodemailer-promise');
require('dotenv').config();

exports.sendEmail = (message) => {
    var sendEmail = nodemailer.config({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        }
    });
    // TODO remove console.log
    sendEmail(message)
        .then(function(info){console.log(info)})
        .catch(function(err){console.log('got error'); console.log(err)});
};