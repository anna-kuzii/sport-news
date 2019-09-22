import React from 'react';
import './style.scss';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';
import { ChangePassword } from '../../containers/ChangePassword/component';
import { UpdateProfile } from '../UpdateProfile';
import { UserLayout } from '../UserLayout';

export const UserProfile = () => (
  <UserLayout>
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
  </UserLayout>
);
