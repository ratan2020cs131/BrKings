import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectUser, login } from '../Redux/Slices/UserSlice'; // Replace with your user slice

const ProtectedRoute = () => {
  const user = useSelector(selectUser);
const dispatch = useDispatch();
  return (
    user.isLoggedin ? <output/> : <Navigate to={dispatch(login())}/>
  );
};

export default ProtectedRoute;