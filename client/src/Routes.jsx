import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './helpers';
import { Register } from './containers/Register/component';
import { Login } from './containers/Login/component';
import { ForgotPassword } from './containers/ForgotPassword/component';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UpdateProfile } from './components/UpdateProfile';
import { Menu } from './components/Menu';
import menuData from './assets/data/menuItems.json';
import { MostPopularComments } from './components/MostPopularComments';
import MostPopular from './assets/data/MostPopularNewsList';
import MostComments from './assets/data/MostCommentsNewsList';
import { UserProfile } from './components/UserProfile';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path='/'>
          // TODO Need refactoring
          <Switch>
            <Header />
          </Switch>
          <Switch>
            <Menu menuList={menuData.menu} />
          </Switch>
          <Route
            exact path='/'
            component={Home}
          />
          <Switch>
            <div className='most-wrapper'>
              <div className='most-news-container'>
                <MostPopularComments
                  blockTitle='most popular'
                  newsBlock={MostPopular}
                />
                <MostPopularComments
                  blockTitle='most comments'
                  newsBlock={MostComments}
                />
              </div>
            </div>
          </Switch>
        </Route>
        <UserProfile />
        <Route path='/updateprofile' component={UpdateProfile} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/forgotpassword' component={ForgotPassword} />
      </Router>
    );
  }
}
