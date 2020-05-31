import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupForm from "../../components/auth/SignupForm";
import { reducerState } from "../../modules";
import { signUp, changeSignupState } from "../../modules/auth";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { signup } = useSelector((state: reducerState) => state.auth);
  const { username, password, email, mobile } = signup;
  const [successOpen, setSuccess] = useState(false);
  const [failOpen, setFail] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeSignupState(name, value));
  };

  const onSubmit = () => {
    dispatch(signUp(username, password, email, mobile, setSuccess, setFail));
  };

  return (
    <div>
      <SignupForm
        successOpen={successOpen}
        failOpen={failOpen}
        setSuccess={setSuccess}
        setFail={setFail}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SignupPage;
