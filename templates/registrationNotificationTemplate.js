require('dotenv').config();

const constants = require('../constants/common.constants');

Date.prototype.getMonthName = function () {
  return constants.monthNames[this.getMonth()];
};

const date= new Date();
const year = date.getFullYear();
const month = date.getMonthName();
const day = date.getDate();

const currentDate = `${month} ${day}, ${year}`;

exports.sendRegNotification = (user) => {
  return {
    from: '"Sport News" <process.env.USER_EMAIL>',
    to: user,
    subject: 'Subscription in Sport News',
    html: `<table style="background:#f9f9fb;width: 100%;padding: 0 20%;">
                <tbody style="font-size: 24px">
                    <tr>
                        <td style="color:#000000;font-style:normal;font-family: Open Sans,sans-serif;text-align:center;font-weight:600;">
                            <p style="margin:50px 0 50px">Hello! You have successfully registered to Sport News <br><span>  ${currentDate}</span></p>
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
    attachments: [ {
      filename: 'check.png',
      path: './client/src/assets/img/check.png',
      cid: 'unique@cid',
    } ],
  };
};
