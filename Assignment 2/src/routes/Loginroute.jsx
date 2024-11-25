import React from "react";
import { cookiesService } from "../shared/_session/cookies";
import { Navigate } from "react-router-dom";

const LoginRoute = ({ element }) => {
  const token = cookiesService.getItem("accessToken");

  if (!token) {
    return <Navigate to={`/`} replace />;
  }

  return element;
};

export default LoginRoute;
