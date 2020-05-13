import React, { useState } from "react";
import Character from "../Character";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../common/Copyright";
import { useHistory } from "react-router-dom";
import { loginStyles } from "../../css/useStyles";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const loginStyle = loginStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, tryLogin } = useLogin();

  const login = () => {
    tryLogin(email, password);
    console.log(isLogin);
  };

  // input 값들 값이 변경될때마다 state 적용
  const onChange = (e: any, callback: Function) => callback(e.target.value);

  if (isLogin) {
    return <Character />;
  }

  return (
    <Container component="main" maxWidth="xs">
      {/* <Container fixed> */}
      <CssBaseline />
      <div className={loginStyle.paper}>
        <Avatar className={loginStyle.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={loginStyle.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            onChange={(e: any) => onChange(e, setEmail)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            onChange={(e: any) => onChange(e, setPassword)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {/* buttons */}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={loginStyle.submit}
                onClick={() => login()}
              >
                로그인
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={loginStyle.submit}
                onClick={() => history.push("/ranking")}
              >
                랭킹 보기
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link variant="body2" style={{ cursor: "pointer" }}>
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link
                variant="body2"
                onClick={() => history.push("/auth/signup")}
                style={{ cursor: "pointer" }}
              >
                계정이 없으신가요? 회원가입
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
