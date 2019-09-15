import {
  articleConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';

export const articleActions = {
  addArticle,
};

function addArticle(article) {
  return dispatch => {
    dispatch(addArticleRequest(article));
    instance.post('/register', article)
      .then(
        () => {
          dispatch(addArticleSuccess());
          history.push('/');
        }
      ).catch(error => {
        dispatch(addArticleFailure(error.response.data && error.response.data.message));
      });
  };

  function addArticleRequest(article) {
    return {
      type: articleConstants.SET_NEW_ARTICLE_REQUEST,
      article,
    };
  }

  function addArticleSuccess(article) {
    return {
      type: articleConstants.SET_NEW_ARTICLE_SUCCESS,
      article,
    };
  }

  function addArticleFailure(article) {
    return {
      type: articleConstants.SET_NEW_ARTICLE_ERRORS,
      article,
    };
  }
}
