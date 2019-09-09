const express = require('express');

const articleController =require('../controllers/newsArticle');

const router = express.Router();

router.get('/', articleController.articleController);

module.exports = router;
