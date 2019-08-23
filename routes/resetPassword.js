const express = require('express')
const resetPassword = require('../controllers/resetPassword')

const router = express.Router()

//TODO: reset password page
router.get('/:userId/:token', (req, res) =>{
  res.send('it is a reset password block')
})

router.post('/', resetPassword.receiveNewPassword)

module.exports = router
