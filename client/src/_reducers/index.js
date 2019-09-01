import {
  combineReducers,
} from 'redux'

import {
  registration,
} from './registration.reducer'

import {
  login,
} from './login.reducer'

import {
  forgotPassword,
} from './forgotpassword.reducer'

import {
  subscription,
} from './subscription.reducer'

const rootReducer = combineReducers({
  registration,
  forgotPassword,
  login,
  subscription,
})

export default rootReducer
