import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { signupStyles } from "../../css/useStyles";
import AuthDialog from "../etc/AuthDialog";

type Props = {
  onChange: Function;
  onSubmit: Function;
  authStatus: number | null;
};

const SignupForm = ({ onChange, onSubmit, authStatus }: Props) => {
  const history = useHistory();
  const signupStyle = signupStyles();

  console.log(authStatus);

  return (
    <Container component="main" maxWidth="xs">
      <div className={signupStyle.paper}>
        <Avatar className={signupStyle.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form className={signupStyle.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="아이디"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일"
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(e)
                }
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="이메일을 통해 지속적인 업데이트 내용을 받고 싶습니다."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={signupStyle.submit}
            onClick={async () => onSubmit()}
          >
            회원가입
          </Button>
          {authStatus && <AuthDialog type="signup" authStatus={authStatus} />}
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                variant="body2"
                onClick={() => history.push("/signin")}
                style={{ cursor: "pointer" }}
              >
                이미 계정이 있으신가요? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignupForm;
