import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Signup from "./Signup";

const Auth = () => {
  const { type } = useParams();
  const history = useHistory();

  // 인증 타입별로 컴포넌트 분기
  const authQurter = (): any => {
    if (type === "login" || type === "signup") {
      return type === "login" ? null : <Signup />;
    } else {
      return history.push("/");
    }
  };

  /* 렌더링 */
  return <div>{authQurter()}</div>;
};

export default Auth;
