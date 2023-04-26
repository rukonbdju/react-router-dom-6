import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const {authInfo}=useAuth();
  console.log(authInfo)
  const {user}=authInfo;
  if (user.emailVerified) return children;
    
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
