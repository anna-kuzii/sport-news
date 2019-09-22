const { check } = require('express-validator');

exports.resetPasswordValidation = [
  check('password').not().isEmpty().isLength({ min: 5 }),
];
