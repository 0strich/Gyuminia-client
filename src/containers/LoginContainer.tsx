import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../modules/auth";
import { reducerState } from "../modules";
import Character from "../components/Character";
import LoginForm from "../components/refectorAuth/LoginForm";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector(
    (state: reducerState) => state.authReducer.isLogin
  );

  const tryLogin = useCallback(
    (email: string, password: string) => dispatch(login(email, password)),
    [dispatch]
  );

  const onChange = (e: any, callback: Function) => callback(e.target.value);
  const onSubmit = () => tryLogin(email, password);

  return (
    <div>
      <LoginForm
        isLogin={isLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LoginContainer;
