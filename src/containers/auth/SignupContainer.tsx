import React, { useState } from "react";
import axios from "axios";
import SignupForm from "../../components/auth/SignupForm";

const SignupContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [successOpen, setSuccess] = useState(false);
  const [failOpen, setFail] = useState(false);
  const postOption = { username, email, password, mobile };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: Function
  ) => callback(e.target.value);

  const onSubmit = async () => {
    try {
      await axios.post("http://localhost:5001/users/signup", postOption);
      setSuccess(true);
    } catch (err) {
      setFail(true);
    }
  };

  return (
    <div>
      <SignupForm
        successOpen={successOpen}
        failOpen={failOpen}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setMobile={setMobile}
        setSuccess={setSuccess}
        setFail={setFail}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SignupContainer;
