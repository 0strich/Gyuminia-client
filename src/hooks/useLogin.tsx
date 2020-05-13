import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/auth";
import { reducerState } from "../modules";

const useLogin = () => {
  const isLogin = useSelector(
    (state: reducerState) => state.authReducer.isLogin
  );
  const dispatch = useDispatch();
  const tryLogin = useCallback(
    (email: string, password: string) => dispatch(login(email, password)),
    [dispatch]
  );
  return { isLogin, tryLogin };
};

export default useLogin;
