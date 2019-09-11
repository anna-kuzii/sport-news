const express = require('express');


const router = express.Router();

const articleController =require('../controllers/newsArticle');


router.get('/', articleController.articleController);

module.exports = router;
