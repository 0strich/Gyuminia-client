import React from "react";
import Character from "../Character";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../common/Copyright";
import { useHistory } from "react-router-dom";
import { loginStyles } from "../../css/useStyles";

type Props = {
  isLogin: boolean;
  setEmail: Function;
  setPassword: Function;
  onChange: Function;
  onSubmit: Function;
};

const LoginForm = ({
  isLogin,
  setEmail,
  setPassword,
  onChange,
  onSubmit,
}: Props) => {
  const loginStyle = loginStyles();
  const history = useHistory();

  if (isLogin) {
    return <Character />;
  }

  return (
    <Container component="main" maxWidth="xs">
      {/* <Container fixed> */}
      <CssBaseline />
      <div className={loginStyle.paper}>
        <Typography component="h1" variant="h5">
          Gyuminia
        </Typography>
        <br />
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
                onClick={() => onSubmit()}
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

export default LoginForm;
