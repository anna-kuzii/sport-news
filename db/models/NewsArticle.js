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
  assosiated_press: {
    type: String,
  },
  imageURL: {
   type: String
 }
});

const NewsArticleSchema = mongoose.model('newsArticles', NewsArticleSchema);

module.exports = NewsArticleSchema;
