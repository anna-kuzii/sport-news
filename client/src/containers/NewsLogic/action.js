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
        const updateArticleList = article.data.map(element => ({
          ...element,
          title: element.title.length > 100 ? `${element.title.slice(0, 100)}...`: element.title,
          text: element.text.indexOf('.') > 100 ?`${element.text.slice(0, 100)}...`: element.text.slice(0, element.text.indexOf('.')),
        }));

        dispatch(fetchDataSuccess(article.data, updateArticleList));
      })
      .catch(error =>
        dispatch(fetchDataFailure(error))
      );
  }
);

export const fetchDataPending = () => ({
  type: newsConstants.FETCH_NEWS_DATA_PENDING,
});

export const fetchDataSuccess = (data, updateData) => ({
  type: newsConstants.FETCH_NEWS_DATA_SUCCESS,
  payload: { data },
  updatePayload: updateData,
});

export const fetchDataFailure = error => ({
  type: newsConstants.FETCH_NEWS_DATA_FAILURE,
  payload: { error },
});
