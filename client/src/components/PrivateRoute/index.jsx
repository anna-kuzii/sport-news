import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthToken } from '../../utils/checkAuthToken';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  useEffect(() => {
    checkAuthToken();
  }, []);
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

const mapStateToProps = ({ login }) =>(
  {
    auth: login,
  }
);


export default connect(mapStateToProps)(PrivateRoute);
