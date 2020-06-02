import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { resetStatus } from "../../modules/auth";

type successProps = { type: string; authStatus: number | null };

const AuthDialog = ({ type, authStatus }: successProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    dispatch(resetStatus());
    authStatus === 200 && history.push("/signin");
  };

  const typeSignin = (status: number, message: string) => {
    return type === "signin" && authStatus === status && message;
  };

  const typeSignup = (status: number, message: string) => {
    return type === "signup" && authStatus === status && message;
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ textAlign: "center" }}
    >
      {type === "siginin" && (
        <DialogTitle id="alert-dialog-title">다시 입력해 주세요</DialogTitle>
      )}
      {type === "signup" && (
        <DialogTitle id="alert-dialog-title">
          {authStatus === 200 && "회원가입 성공!!"}
          {authStatus === 401 && "다시 입력해 주세요"}
          {authStatus === 404 && "다시 입력해 주세요"}
          {authStatus === 409 && "아이디 중복"}
        </DialogTitle>
      )}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {typeSignin(401, "아이디 또는 비밀번호를 확인해 주세요")}
          {typeSignin(404, "아이디 또는 비밀번호를 확인해 주세요")}
          {typeSignup(200, "회원가입에 성공하였습니다")}
          {typeSignup(401, "양식에 맞게 입력해 주세요")}
          {typeSignup(404, "잘못된 형식입니다")}
          {typeSignup(409, "중복된 계정이 존재합니다")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="primary" autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthDialog;
