const ArticleQuery = require('../db/query/ArticleQuery');
const { validationResult } = require('express-validator');
const constants = require('../constants/common.constants');

const cloudinary = require('cloudinary').v2;

exports.getArticles = (req, res) => {
  ArticleQuery.getAllArticles().then(articles=> {
    res.send(articles);
  });
};

exports.createArticle = (req, res) => {
  const errors = validationResult(req);
  const image = req.files.image;

  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  if (image.size > constants.imageSize) {
    return res.status(422).json({ message: 'Image must be less than 2 mb' });
  }

  cloudinary.uploader.upload(image.path).then(result =>{
    const article = {
      author: req.body.author,
      title: req.body.title,
      alt: req.body.alt,
      text: req.body.text,
      assosiated_press: req.body.assosiated_press,
      imageURL: result.url,
    };

    ArticleQuery.createArticle(article);
  }).then(()=>(res.status(200).json({ message: 'Article created' })))
    .catch(errors=>{
      res.status(422).json({ message: errors });
    });
};
