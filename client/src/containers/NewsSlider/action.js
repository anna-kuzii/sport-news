import { articleConstants } from './constant';
import { instance } from '../../axios.instanse';

const minLength = 4;

export const getArticles = () => dispatch =>{
  instance.get('/article')
    .then(res =>{
      const updateArticleList = res.data.map(element => ({
        ...element,
        text: element.text.slice(0, element.text.indexOf('.')),
      }));

      const initialArticlesArray = (res.data.length < minLength)
        ? Array.from({ length: res.data.length }, (elem, idx) => idx+1)
        : Array.from({ length: minLength }, (elem, idx) => idx + 1);

      dispatch(getArticleSuccess(updateArticleList, initialArticlesArray));
    }).catch(error =>{
      dispatch(getArticleFailure(error.response.data));
    });
};

function getArticleSuccess(updateArticleList, initialArticlesArray) {
  return {
    type: articleConstants.GET_ARTICLE_SUCCESS,
    articles: updateArticleList,
    initialArticlesArray,
  };
}

function getArticleFailure(error) {
  return {
    type: articleConstants.GET_ARTICLE_FAILURE,
    error,
  };
}

