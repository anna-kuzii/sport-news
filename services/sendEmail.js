const nodemailer = require("nodemailer");
require('dotenv').config();

exports.sendEmail = (user) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        }
    });

    var mailOptions = {
        from: process.env.USER_EMAIL,
        to: user,
        subject: 'Subscription in Sport News',
        html: '<table  style="background:#f9f9fb;width: 100%;padding: 10%;color:#000000;font-family: Open Sans ;font-weight: 600;">' +
            '<thead>' +
            '</thead>' +
            '<tbody style="font-size: 24px" >' +
            '<tr>' +
            '<th>Hello! You have successfully registered to Sport News</th></tr>' +
            '<tr>' +
            '<th>March 21, 2019</th></tr>' +
            '<tr style="background: #ffffff;height: 100px"><td style="text-align: center;font-family: Open Sans;">' +
            '<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1 9L8 14.5L20 1" stroke="#D72130" stroke-width="2" stroke-linejoin="round"/>\n' +
            '</svg>\n' +
            '<p style="color: #D72130;font-size: 22px;margin: 40px 0 10px;">Sport News</p>' +
            '<p style="color: #596377;font-size: 12px;margin-bottom: 40px">Now you will reccive the latest news in the world of sport </p>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>'
    };
    // TODO remove console.log
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${  info.response}`);
        }
    });
};