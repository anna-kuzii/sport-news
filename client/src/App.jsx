import React from 'react'
import { Router, Route } from 'react-router-dom'

import './App.scss'

import { history } from './_helpers'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { ForgotPassword } from './components/ForgotPassword'
import { Home } from './components/Home'
import { UpdateProfile } from './components/UpdateProfile'

const App = () => (
  <Router history={history}>
    <Route
      exact path='/'
      component={Home}
    />
    <Route path='/updateprofile' component={UpdateProfile} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Footer />
  </Router>
)
export default App
