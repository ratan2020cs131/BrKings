import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUser, login } from '../Redux/Slices/UserSlice'; // Replace with your user slice

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={dispatch(login())} />
        )
      }
    />
  );
};

export default ProtectedRoute;