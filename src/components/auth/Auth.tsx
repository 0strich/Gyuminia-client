import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const { type } = useParams();
  const history = useHistory();

  // 인증 타입별로 컴포넌트 분기
  const authQurter = (): any => {
    console.log(type);
    if (type === "login" || type === "signup") {
      return type === "login" ? <Login /> : <Signup />;
    } else {
      return history.push("/");
    }
  };

  /* 렌더링 */
  return <div>{authQurter()}</div>;
};

export default Auth;
