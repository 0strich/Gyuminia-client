import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupForm from "../../components/auth/SignupForm";
import { reducerState } from "../../modules";
import { signUp, changeSignupState } from "../../modules/auth";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { signup, signupAuthStatus } = useSelector(
    (state: reducerState) => state.auth
  );
  const { username, password, email } = signup;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeSignupState(name, value));
  };

  const onSubmit = () => {
    dispatch(signUp(username, password, email));
  };

  return (
    <div>
      <SignupForm
        onChange={onChange}
        onSubmit={onSubmit}
        signupAuthStatus={signupAuthStatus}
      />
    </div>
  );
};

export default SignupPage;
