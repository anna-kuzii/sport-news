const express = require('express');

const resetPassword = require('../controllers/resetPassword');
const resetPasswordValidation = require('../templates/forgotPasswordValidationTemplate');

const router = express.Router();

router.post('/', resetPasswordValidation.resetPasswordValidation, resetPassword.receiveNewPassword);

module.exports = router;
