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

const rootReducer = combineReducers({
  registration,
  forgotPassword,
  login,
})

export default rootReducer
