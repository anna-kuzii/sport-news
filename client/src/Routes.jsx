import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history, store } from './helpers';

import { Register } from './containers/Register/component';
import { Login } from './containers/Login/component';
import { ForgotPassword } from './containers/ForgotPassword/component';

import { Home } from './components/Home';
import { Dealbook } from './components/Dealbook';
import { UserProfile } from './components/UserProfile';
import { NotFound } from './components/NotFound';
import VideoPage from './containers/VideoPage/component';
import AddNews from './containers/AddNews/component';
import PrivateRoute from './containers/PrivateRoute';

import { NewsArticle } from './components/NewsArticle';

export const Routes = () => (

  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute
          exact path='/'
          component={Home}
        />
        <PrivateRoute
          exact path='/dealbook'
          component={Dealbook}
        />
        <PrivateRoute
          path='/userprofile'
          component={UserProfile}
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
        <PrivateRoute
          exact path='/videopage'
          component={VideoPage}
        />
        <PrivateRoute
          path='/addnews'
          component={AddNews}
        />
        <PrivateRoute
          exact path='/news/:id'
          component={NewsArticle}
        />
        <Route
          path='*'
          component={NotFound}
        />
      </Switch>
    </Router>
  </Provider>

);
