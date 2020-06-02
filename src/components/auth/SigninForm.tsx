import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { loginStyles } from "../../css/useStyles";
import AuthDialog from "../etc/AuthDialog";

type Props = {
  onChange: Function;
  onSubmit: Function;
  authStatus: number | null;
};

const SigninForm = ({ onChange, onSubmit, authStatus }: Props) => {
  const loginStyle = loginStyles();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
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
            id="username"
            label="아이디"
            name="username"
            autoComplete="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
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
              {authStatus && authStatus !== 200 && (
                <AuthDialog type="signin" authStatus={authStatus} />
              )}
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={loginStyle.submit}
                onClick={() => history.push("/rank")}
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
                onClick={() => history.push("/signup")}
                style={{ cursor: "pointer" }}
              >
                계정이 없으신가요? 회원가입
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SigninForm;
