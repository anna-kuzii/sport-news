import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './helpers';

import { Register } from './containers/Register/component';
import { Login } from './containers/Login/component';
import { ForgotPassword } from './containers/ForgotPassword/component';

import { Home } from './components/Home';
import { Dealbook } from './components/Dealbook';
import { UpdateProfile } from './components/UpdateProfile';
import { UserProfile } from './components/UserProfile';


export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          exact path='/'
          component={Home}
        />
        <Route
          exact path='/dealbook'
          component={Dealbook}
        />
        <UserProfile />
        <Route
          exact path='/updateprofile'
          component={UpdateProfile}
        />
        <Route
          exact path='/register'
          component={Register}
        />
        <Route
          exact path='/login'
          component={Login}
        />
        <Route
          exact path='/forgotpassword'
          component={ForgotPassword}
        />
      </Router>
    );
  }
}
