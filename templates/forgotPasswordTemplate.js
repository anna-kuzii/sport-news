require('dotenv').config();

exports.forgotPasswordTemplate = (user, url) => {
  return {
    from: '"Sport News" <process.env.USER_EMAIL>',
    to: user.email,
    subject: 'Sport-News Password Reset',
    html: `<table style="background:#f9f9fb;width: 100%;padding: 0 20%;">
                <tbody style="font-size: 20px">
                    <tr>
                        <td style="color:#000000;font-style:normal;font-family: Open Sans,sans-serif;text-align:center;font-weight:600;">
                            <p style="margin:50px 0 50px">Hey ${user.firstName || user.email},<br>We heard that you lost your Sport-News password. Sorry about that!<br>But don’t worry! You can use the following link to reset your password:</p>
                        </td>
                    </tr>
                    <table style="background:#f9f9fb;width: 100%;padding: 0 45px 50px;">
                        <tr style="background: #ffffff;height: 180px">
                            <td style="text-align: center;font-family: Open Sans, sans-serif;font-weight: 600;">
                                <a href=${url} style="text-decoration: none; color: #000000; font-size: 12px;">Reset password link</a>
                                <p style="color: #D72130;font-size: 22px;margin: 20px 0 20px;line-height: 28px;">Sport News</p>
                                <p style="color: #596377;font-size: 12px;margin-bottom: 40px; line-height: 16px;">If you don’t use this link within 1 hour, it will expire.</p>
                            </td>
                        </tr>
                      </table>
                </tbody>
                </table>`,
  };
};
