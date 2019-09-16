const { check } = require('express-validator');

exports.registrationValidation = [
  check('email', 'Your email is not valid').not().isEmpty().isEmail(),
];
