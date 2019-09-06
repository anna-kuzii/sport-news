const express = require('express');
const cors = require('cors');
const articleController =require('../controllers/newsArticle');

const router = express.Router();

router.use(cors());

router.get('/', articleController.articleController);

module.exports = router;
