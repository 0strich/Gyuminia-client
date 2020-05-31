import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../modules/auth";
import { reducerState } from "../../modules";
import { changeSigninState } from "../../modules/auth";
import LoginForm from "../../components/auth/SigninForm";

const SigninPage = () => {
  const dispatch = useDispatch();
  const { isLogin, signin } = useSelector((state: reducerState) => state.auth);
  const { username, password } = signin;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeSigninState(name, value));
  };

  const onSubmit = () => {
    dispatch(signIn(username, password));
  };

  return (
    <div>
      <LoginForm isLogin={isLogin} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
};

export default SigninPage;
