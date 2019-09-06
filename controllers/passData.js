const NewsArticle = require('../db/models/NewsArticle');

exports.passData = (req, res) => {
  return NewsArticle.find(function (err, data) {
    if (err) return res.send(err);
    res.json(data);
  });
};
