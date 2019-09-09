import { articleConstants } from './constant';
import { instance } from '../../axios.instanse';

export const getArticles = () => dispatch =>{
  instance.get('/article')
    .then(res =>{
      const updateArticleList = res.data.map(element => ({
        ...element,
        text: element.text.slice(0, element.text.indexOf('.')),
      }));

      dispatch(getArticleSuccess(updateArticleList, false));
    }).catch(error =>{
      dispatch(getArticleFailure(error.response.data));
    });
};

function getArticleSuccess(updateArticleList, loading) {
  return {
    type: articleConstants.GET_ARTICLE_SUCCESS,
    articles: updateArticleList,
    loading,
  };
}

function getArticleFailure(error) {
  return {
    type: articleConstants.GET_ARTICLE_FAILURE,
    error,
  };
}

