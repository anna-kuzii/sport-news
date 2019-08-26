const { check } = require('express-validator');

exports.registrationValidation = [
    check('first_name', 'First name must be a-z,A-Z').not().isEmpty().isAlpha(),
    check('last_name', 'Last name must be a-z,A-Z').not().isEmpty().isAlpha(),
    check('email', 'Your email is not valid').not().isEmpty().isEmail(),
    check('password', 'Your password must be at least 5 characters').not().isEmpty().isLength({min: 5}).isAlpha()
];