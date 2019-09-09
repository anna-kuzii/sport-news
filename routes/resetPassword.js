const express = require('express');

const resetPassword = require('../controllers/resetPassword');
const resetPasswordValidation = require('../templates/forgotPasswordValidationTemplate');

const router = express.Router();

//TODO: reset password page
router.get('/:userId/:token', (req, res) =>{
  res.send('it is a reset password block');
});

router.post('/', resetPasswordValidation.resetPasswordValidation, resetPassword.receiveNewPassword);

module.exports = router;
