import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { tokenCheck } from "../../modules/token";
import TokenExpireModal from "../../components/etc/TokenExpireModal";
import { reducerState } from "../../modules";

type Props = { component: any; rest: any };

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const dispatch = useDispatch();
  const { tokenAuth } = useSelector((state: reducerState) => state.token);

  useEffect(() => {
    dispatch(tokenCheck());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        tokenAuth ? <Component {...props} /> : <TokenExpireModal />
      }
    />
  );
};

export default AuthRoute;
