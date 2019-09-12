import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from './helpers';

import { Register } from './containers/Register/component';
import { Login } from './containers/Login/component';
import { ForgotPassword } from './containers/ForgotPassword/component';

import { Home } from './components/Home';
import { Dealbook } from './components/Dealbook';
import { UpdateProfile } from './components/UpdateProfile';
import { UserProfile } from './components/UserProfile';
import VideoPage from './containers/VideoPage/component';
import { Copyright } from './components/Copyright';
import { NewsArticle } from './components/NewsArticle';


export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path='/'>
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
          <Switch>
            <Copyright />
          </Switch>
        </Route>
        <Route path='/videopage'>
          <Switch>
            <Header />
          </Switch>
          <Switch>
            <Menu menuList={menuData.menu} />
          </Switch>
          <Route
            path='/videopage'
            component={VideoPage}
          />
         
          <Route path='/news'>
            <Switch>
              <Header />
            </Switch>
            <Switch>
              <Menu menuList={menuData.menu} />
            </Switch>
            <Route
              path='/news'
              component={NewsArticle}
            /> 
            <Switch>
              <Copyright />
            </Switch>
          </Route>
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
          <Switch>
            <Copyright />
          </Switch>
        </Route>
        <Route path='/userprofile'>
          <Switch>
            <Header />
          </Switch>
          <Switch>
            <Menu menuList={menuData.menu} />
          </Switch>
          <Route
            path='/userprofile'
            component={UserProfile}
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


export const Routes = () => (
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
    <Route
      exact path='/videopage'
      component={VideoPage}
    />
  </Router>
);
