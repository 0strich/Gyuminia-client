import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../modules/auth";
import { reducerState } from "../../modules";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector((state: reducerState) => state.auth.isLogin);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: Function
  ) => {
    console.log(e.target);
    callback(e.target.value);
  };

  const onSubmit = () => dispatch(login(username, password));

  return (
    <div>
      <LoginForm
        isLogin={isLogin}
        setUsername={setUsername}
        setPassword={setPassword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LoginPage;
