import {
  articleConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';
import { history } from '../../helpers';


export const addArticle = (article) => (
  dispatch => {
    instance.post('/article', article)
      .then(
        () => {
          dispatch(addArticleSuccess(article));
          history.push('/');
        }
      ).catch(error => {
        dispatch(addArticleFailure(error.response.data && error.response.data.message));
      });
  }
);


const addArticleSuccess = article => (
  {
    type: articleConstants.SET_NEW_ARTICLE_SUCCESS,
    article,
  }
);


const addArticleFailure = error => (
  {
    type: articleConstants.SET_NEW_ARTICLE_ERRORS,
    error,
  }
);
