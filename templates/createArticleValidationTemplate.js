const { check } = require('express-validator');

exports.createArticleValidation = [
  check('alt').not().isEmpty(),
  check('title').not().isEmpty().isLength({ max: 100 }),
  check('text').not().isEmpty(),
];
