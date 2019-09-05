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

import thunkMiddleware from 'redux-thunk';
import {
  createLogger,
} from 'redux-logger';

const rootReducer = combineReducers({
  registration,
  forgotPassword,
  login,
});

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);