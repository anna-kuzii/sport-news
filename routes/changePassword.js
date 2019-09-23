const express = require('express');

const { changePassword } = require('../controllers/changePassword');
const changePasswordValidation = require('../templates/changePasswordValidationTemlate');

const router = express.Router();

//TODO: reset password page

router.post('/', changePassword, changePasswordValidation.changePasswordValidation );

module.exports = router;
