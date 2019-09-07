const NewsArticle = require('../models/NewsArticle');

exports.getAllArticles = () => NewsArticle.find();
