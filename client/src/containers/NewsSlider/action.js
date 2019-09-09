import { articleConstants } from './constant';
import { instance } from '../../axios.instanse';

export const getArticles = () => dispatch =>{
  instance.get('/article')
    .then(res =>{
      const updateArticleList = res.data.map(element => ({
        ...element,
        text: element.text.slice(0, element.text.indexOf('.')),
      }));

      dispatch(getArticleSuccess(updateArticleList));
    }).catch(error =>{
      dispatch(getArticleFailure(error.response.data));
    });
};

function getArticleSuccess(updateArticleList) {
  return {
    type: articleConstants.GET_ARTICLE_SUCCESS,
    articles: updateArticleList,

  };
}

function getArticleFailure(error) {
  return {
    type: articleConstants.GET_ARTICLE_FAILURE,
    error,
  };
}

