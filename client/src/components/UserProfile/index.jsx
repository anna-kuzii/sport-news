import React from 'react';
import './style.scss';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { ChangePassword } from '../ChangePassword';
import { UpdateProfile } from '../UpdateProfile';
import { Header } from '../Header';
import { Menu } from '../Menu';
import menuData from '../../assets/data/menuItems.json';

const UserProfileComponent = () => (
  <Router>
    <div className='userprofile-wrapper'>
      <div className='buttons'>
        <NavLink
          className='button'
          exact activeClassName='active'
          to='/userprofile/changepassword'
        >
            Change Password
        </NavLink>

        <NavLink
          className='button'
          activeClassName='active'
          to='/userprofile/updateprofile'
        >
            UpdateProfile
        </NavLink>
      </div>
      <Route
        exact path='/userprofile/changepassword'
        component={ChangePassword}
      />
      <Route
        exact path='/userprofile/updateprofile'
        component={UpdateProfile}
      />
    </div>
  </Router>
);

export const UserProfile =()=>(
  <Route path='/userprofile'>
    <Switch>
      <Header />
    </Switch>
    <Switch>
      <Menu menuList={menuData.menu} />
    </Switch>
    <Route
      path='/userprofile'
      component={UserProfileComponent}
    />
  </Route>
);
