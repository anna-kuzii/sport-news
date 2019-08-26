const { check } = require('express-validator');

exports.resetPasswordValidation = [
    check('password').not().isEmpty().isAlpha().isLength({ min: 5 }),
    check('confirm_password').not().isEmpty().isAlpha().isLength({ min: 5 }),
];