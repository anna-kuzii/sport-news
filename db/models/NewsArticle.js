const mongoose = require('mongoose');

const { Schema } = mongoose;

const NewsArticleSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  assoсiatedPress: {
    type: String,
  },
  alt: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  league: {
    type: String,
  },
});

const NewsArticle = mongoose.model('newsArticles', NewsArticleSchema, 'newsarticles');

module.exports = NewsArticle;
