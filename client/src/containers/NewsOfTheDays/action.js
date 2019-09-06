import {
  dayNewsConstants,
} from './constant';
import {
  instance,
} from '../../axios.instanse';

export function fetchNewsDayData() {
  return dispatch => {
    dispatch(fetchDataBegin());
    return instance.get('/article')
      .then(article => {
        dispatch(fetchDataSuccess(article.data));
        return article.data;
      })
      .catch(error =>
        dispatch(fetchDataFailure(error))
      );
  };
}

export const fetchDataBegin = () => ({
  type: dayNewsConstants.FETCH_DATA_PENDING,
});

export const fetchDataSuccess = data => ({
  type: dayNewsConstants.FETCH_DATA_SUCCESS,
  payload: { data },
});

export const fetchDataFailure = error => ({
  type: dayNewsConstants.FETCH_DATA_FAILURE,
  payload: { error },
});
