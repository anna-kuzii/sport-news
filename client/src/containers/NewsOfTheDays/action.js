import {
  dayNewsConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';

export const fetchNewsDayData =() =>(
  dispatch => {
    dispatch(fetchDataBegin());
    instance.get('/article')
      .then(article => {
        dispatch(fetchDataSuccess(article.data));
      })
      .catch(error =>
        dispatch(fetchDataFailure(error))
      );
  }
);

export const fetchDataBegin = () => ({
  type: dayNewsConstants.FETCH_NEWS_DAY_DATA_PENDING,
});

export const fetchDataSuccess = data => ({
  type: dayNewsConstants.FETCH_NEWS_DAY_DATA_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = error => ({
  type: dayNewsConstants.FETCH_NEWS_DAY_DATA_FAILURE,
  payload: { error },
});
