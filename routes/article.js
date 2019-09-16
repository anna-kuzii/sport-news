const express = require('express');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart();
const router = express.Router();
const articleController = require('../controllers/articleController');
const validation = require('../templates/createArticleValidationTemplate');

router.get('/', articleController.getArticles);
router.post('/',multipartMiddleware, validation.createArticleValidation, articleController.createArticle);

module.exports = router;
