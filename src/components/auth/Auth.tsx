import React from "react";
import { useParams, useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const { type } = useParams();
  const history = useHistory();
  // 인증 타입별로 컴포넌트 분기
  const authQurter = (): any => {
    if (type === "login" || type === "signup") {
      return type === "login" ? <Login /> : <Signup />;
    } else {
      return history.push("/");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "lightgray", height: "100vh" }}
        >
          {authQurter()}
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Auth;
