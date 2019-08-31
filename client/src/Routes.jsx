import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { history } from './_helpers'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { ForgotPassword } from './components/ForgotPassword'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { UpdateProfile } from './components/UpdateProfile'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path='/'>
          <Switch>
            <Header />
          </Switch>
          <Route
            exact path='/'
            component={Home}
          />
        </Route>
        <Route path='/updateprofile' component={UpdateProfile} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/forgotpassword' component={ForgotPassword} />
      </Router>
    )
  }
}
