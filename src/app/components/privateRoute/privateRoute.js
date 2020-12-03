import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ authentication, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) =>
        authentication.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
