const { check } = require('express-validator');

exports.changePasswordValidation = [
  check('password').not().isEmpty().isLength({ min: 5 }),
  check('oldPassword').not().isEmpty().isLength({ min: 5 }),
];
