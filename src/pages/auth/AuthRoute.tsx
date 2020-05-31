import React from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
import { refresh } from "../../modules/token";

type Props = { component: any; rest: any };

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const dispatch = useDispatch();

  const checkExpire = (token: string) => {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) return true;
    return false;
  };

  const checkAuth = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) return false;

    try {
      if (checkExpire(accessToken)) {
        if (checkExpire(refreshToken)) {
          return false;
        } else {
          dispatch(refresh());
        }
      }
    } catch (err) {
      return false;
    }

    return true;
  };

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
