import {
  newsConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';

export const fetchNewsData =() =>(
  dispatch => {
    dispatch(fetchDataPending());
    instance.get('/article')
      .then(article => {
        dispatch(fetchDataSuccess(article.data));
      })
      .catch(error =>
        dispatch(fetchDataFailure(error))
      );
  }
);

export const fetchDataPending = () => ({
  type: newsConstants.FETCH_NEWS_DATA_PENDING,
});

export const fetchDataSuccess = data => ({
  type: newsConstants.FETCH_NEWS_DATA_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = error => ({
  type: newsConstants.FETCH_NEWS_DATA_FAILURE,
  payload: { error },
});
