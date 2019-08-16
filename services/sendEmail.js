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
        from: '"Sport News" <process.env.USER_EMAIL>',
        to: user,
        subject: 'Subscription in Sport News',
        html: `<table style="background:#f9f9fb;width: 100%;padding: 0 20%;">
                <thead>
                    
                </thead>
                <tbody style="font-size: 24px">
                    <tr>
                        <td style="color:#000000;font-style:normal;font-family: Open Sans,sans-serif;text-align:center;font-weight:600;">
                            <p style="margin:50px 0 50px">Hello! You have successfully registered to Sport News <br> March 21, 2019</p>
                        </td>
                    </tr>
                    <table style="background:#f9f9fb;width: 100%;padding: 0 45px 50px;">
                        <tr style="background: #ffffff;height: 180px">
                            <td style="text-align: center;font-family: Open Sans, sans-serif;font-weight: 600;">
                                <img src="cid:unique@cid" style="margin-top: 45px"/>
                                <p style="color: #D72130;font-size: 22px;margin: 20px 0 20px;line-height: 28px;">Sport News</p>
                                <p style="color: #596377;font-size: 12px;margin-bottom: 40px; line-height: 16px;">Now you will reccive the latest news in
                                the world of sport </p>
                            </td>
                        </tr>
                      </table>     
                </tbody>
                </table>`,
        attachments: [{
            filename: 'check.png',
            path: './assets/check.png',
            cid: 'unique@cid'
        }]
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