import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthToken } from '../../utils/checkAuthToken';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  checkAuthToken();
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

const mapStateToProps = state =>(
  {
    auth: state.login,
  }
);


export default connect(mapStateToProps)(PrivateRoute);
