import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type successProps = { signinAuthStatus: number | null };

const SigninDilog = ({ signinAuthStatus }: successProps) => {
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
      <DialogTitle id="alert-dialog-title">다시 입력해 주세요</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {signinAuthStatus === 401 && "아이디 또는 비밀번호를 확인해 주세요"}
          {signinAuthStatus === 404 && "아이디 또는 비밀번호를 확인해 주세요"}
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

export default SigninDilog;
