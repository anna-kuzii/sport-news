import { articleConstants } from './constant';
import { instance } from '../../axios.instanse';

export const articleActions = {
  getArticles,
};

let startArray;

function getArticles() {
  return dispatch =>{
    instance.get('/article')
      .then(res =>{
        res.data.forEach(element =>{
          element.text = element.text.slice(0, element.text.indexOf('.'));
        });
        if (res.data.length < 4) {
          startArray = Array.from({ length: res.data.length }, (elem, idx) => idx+1);
        } else {
          startArray = Array.from({ length: 4 }, (elem, idx) => idx + 1);
        }
        dispatch(getArticleSuccess(res.data, startArray));
      }).catch(error =>{
        dispatch(getArticleFailure(error.response.data));
      });
  };

  function getArticleSuccess(articles, startArray) {
    return {
      type: articleConstants.GET_ARTICLE_SUCCESS,
      articles,
      startArray,
    };
  }

  function getArticleFailure(error) {
    return {
      type: articleConstants.GET_ARTICLE_SUCCESS,
      error,
    };
  }
}
