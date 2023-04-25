import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const authInfo=useContext(AuthContext);
  const {user}=authInfo
  if (user) return children;
    
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
