import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

const AuthRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to='/login'
        />
      )
    }
  />
)

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(AuthRoute)
