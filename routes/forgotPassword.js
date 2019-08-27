const express = require('express')
const forgotPassword = require('../controllers/forgotPassword')

const router = express.Router()
router.get('/', (req, res) => {
  // TODO render a forgotPassword form
  res.send('it is a forgot password block')
})

router.post('/', forgotPassword.sendForgotPasswordEmail)


module.exports = router
