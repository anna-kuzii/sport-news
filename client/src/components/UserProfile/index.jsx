import React from 'react';
import './style.scss';
import {
  Route,
  NavLink,
} from 'react-router-dom';

import { UpdateProfile } from '../../containers/UpdateProfile/component';
import { ChangePassword } from '../../containers/ChangePassword/component';
import { UserLayout } from '../UserLayout';

export const UserProfile = () => (
  <UserLayout>
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
  </UserLayout>
);
