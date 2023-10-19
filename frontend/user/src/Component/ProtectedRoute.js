import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectAuthUser ,loginBox} from "../Redux/Slices/authSlice"; // Replace with your user slice

const ProtectedRoute = () => {
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  return user.isSuccess ? <Outlet /> : <Navigate to={dispatch(loginBox())} />;
};

export default ProtectedRoute;
