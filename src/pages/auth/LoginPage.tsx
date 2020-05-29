import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../modules/auth";
import { reducerState } from "../../modules";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector((state: reducerState) => state.auth.isLogin);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: Function
  ) => callback(e.target.value);

  const onSubmit = () => dispatch(login(email, password));

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

export default LoginPage;
