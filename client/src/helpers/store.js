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
  forgotPassword,
} from '../containers/ForgotPassword/reducer';

import {
  productReducer,
} from '../containers/NewsLogic/reducer';

import {
  videoReducer,
} from '../containers/VideoPage/reducer';

import {
  addArticleReducer,
} from '../containers/AddNews/reducer';

import {
  subscription,
} from '../containers/Footer/reducer';

import {
  resetPassword,
} from '../containers/ResetPassword/reducer';

import {
  changePassword,
} from '../containers/ChangePassword/reducer';

import {
  update,
} from '../containers/UpdateProfile/reducer';

import thunkMiddleware from 'redux-thunk';
import {
  createLogger,
} from 'redux-logger';

const rootReducer = combineReducers({
  registration,
  forgotPassword,
  login,
  productReducer,
  videoReducer,
  addArticleReducer,
  subscription,
  resetPassword,
  update,
  changePassword,
});

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
