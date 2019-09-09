const ArticleQuery = require('../db/query/ArticleQuery');

exports.articleController = (req, res) => {
  ArticleQuery.getAllArticles().then(articles=>{
    res.send(articles);
  });
};
