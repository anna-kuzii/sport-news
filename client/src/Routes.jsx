import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './helpers';
import { Register } from './containers/Register/component';
import { Login } from './containers/Login/component';
import { ForgotPassword } from './containers/ForgotPassword/component';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UpdateProfile } from './components/UpdateProfile';
import { Menu } from './components/Menu';
import menuData from './assets/data/menuItems.json';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path='/'>
          <Header />
          <Menu menuList={menuData.menu} />
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
    );
  }
}
