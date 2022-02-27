import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import { isLogin } from "../utils/Utils";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() == true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoutes;
