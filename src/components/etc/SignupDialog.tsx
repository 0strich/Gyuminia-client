import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type successProps = { signupAuthStatus: number | null };

const SignupDialog = ({ signupAuthStatus }: successProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ textAlign: "center" }}
    >
      <DialogTitle id="alert-dialog-title">
        {signupAuthStatus === 200 ? "회원가입 성공!!" : "다시 입력해 주세요"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {signupAuthStatus === 200 && "회원가입에 성공하였습니다"}
          {signupAuthStatus === 401 && "양식에 맞게 입력해 주세요"}
          {signupAuthStatus === 404 && "잘못된 형식입니다"}
          {signupAuthStatus === 409 && "중복된 계정이 존재합니다"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            window.history.go();
          }}
          color="primary"
          autoFocus
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignupDialog;
