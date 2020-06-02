import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../modules/auth";
import { reducerState } from "../../modules";
import { changeSigninState } from "../../modules/auth";
import LoginForm from "../../components/auth/SigninForm";

const SigninPage = () => {
  const dispatch = useDispatch();
  const { signin, authStatus } = useSelector(
    (state: reducerState) => state.auth
  );
  const { username, password } = signin;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeSigninState(name, value));
  };

  const onSubmit = () => {
    dispatch(signIn(username, password));
  };

  if (localStorage.getItem("accessToken")) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        authStatus={authStatus}
      />
    </div>
  );
};

export default SigninPage;
