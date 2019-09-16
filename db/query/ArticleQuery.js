const mongoose = require('mongoose');
const NewsArticle = require('../models/NewsArticle');

exports.getAllArticles = () => NewsArticle.find();

exports.createArticle = (article) => {
  const newArticle = new NewsArticle({
    _id: new mongoose.Types.ObjectId().toHexString(),
    author: article.author,
    title: article.title,
    alt: article.alt,
    text: article.text,
    imageURL: article.imageURL,
  });

  newArticle.save();
};

