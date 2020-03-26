import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRouteEvent = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isSubscribed, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isSubscribed && !loading ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PrivateRouteEvent;
