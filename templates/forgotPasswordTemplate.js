require('dotenv').config()

exports.forgotPasswordTemplate = (user, url) => {
  const mailOptions = {
    from: '"Sport News" <process.env.USER_EMAIL>',
    to: user.email,
    subject: 'Sport-News Password Reset',
    html: `
  <p>Hey ${user.first_name || user.email},</p>
  <p>We heard that you lost your Sport-News password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  `,
  }

  return mailOptions
}
