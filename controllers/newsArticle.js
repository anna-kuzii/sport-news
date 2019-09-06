const ArticleQuery = require('../db/query/ArticleQuery');

exports.articleController = (req, res) => {
  return ArticleQuery.getAllArticles().then(articles=>{
    res.send(articles);
  });
};
