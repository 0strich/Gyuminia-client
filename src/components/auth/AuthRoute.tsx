import React from "react";
import decode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";

const checkAuth = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) return false;

  try {
    if (accessToken) {
      const { exp } = decode(accessToken);
      if (exp < new Date().getTime() / 1000) {
        if (refreshToken) {
          const { exp } = decode(refreshToken);
          if (exp < new Date().getTime() / 1000) return false;
        }
      }
    }
  } catch (err) {
    return false;
  }

  // refresh token 으로 access token 재요청후 다시 access token 검증

  return true;
};

type Props = { component: any; rest: any };

const AuthRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
