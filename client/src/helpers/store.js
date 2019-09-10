import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import {
  registration,
} from '../containers/Register/reducer';

import {
  login,
} from '../containers/Login/reducer';

import {
  getArticles,
} from '../containers/NewsSlider/reducer';

import {
  forgotPassword,
} from '../containers/ForgotPassword/reducer';

import {
  productReducer,
} from '../containers/NewsLogic/reducer';

import {
  videoReducer,
} from '../containers/VideoPage/reducer';

import thunkMiddleware from 'redux-thunk';
import {
  createLogger,
} from 'redux-logger';

const rootReducer = combineReducers({
  registration,
  forgotPassword,
  login,
  getArticles,
  productReducer,
  videoReducer,
});

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
