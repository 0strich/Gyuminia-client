import React, { useState } from "react";
import axios from "axios";
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
import { signupStyles } from "../../css/useStyles";
import { SingupSuccess, SignupFail } from "../dialog/Dialog";

const Signup = () => {
  const signupStyle = signupStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [successOpen, setSuccess] = useState(false);
  const [failOpen, setFail] = useState(false);

  // input 값들 값이 변경될때마다 state 적용
  const onChange = (e: any, callback: Function) => callback(e.target.value);
  // modal에 사용
  const handleSuccessOpen = () => setSuccess(true);
  const handleSuccessClose = () => setSuccess(false);
  const handleFailOpen = () => setFail(true);
  const handleFailClose = () => setFail(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
                onChange={(e: any) => onChange(e, setUsername)}
                autoFocus
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
                onChange={(e: any) => onChange(e, setEmail)}
                autoComplete="email"
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
                onChange={(e: any) => onChange(e, setPassword)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="휴대전화"
                name="mobile"
                onChange={(e: any) => onChange(e, setMobile)}
                autoComplete="mobile"
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
            onClick={async () => {
              try {
                await axios.post("http://localhost:5001/users/signup", {
                  username,
                  email,
                  password,
                  mobile,
                });
                handleSuccessOpen();
              } catch (err) {
                handleFailOpen();
              }
            }}
          >
            회원가입
          </Button>
          <SingupSuccess
            successOpen={successOpen}
            handleSuccessClose={handleSuccessClose}
          />
          <SignupFail failOpen={failOpen} handleFailClose={handleFailClose} />
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                variant="body2"
                onClick={() => history.push("/auth/login")}
                style={{ cursor: "pointer" }}
              >
                이미 계졍이 있으신가요? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Signup;
