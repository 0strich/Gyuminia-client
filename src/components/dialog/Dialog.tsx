import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type successProps = {
  successOpen: boolean;
  handleSuccessClose: any;
};

type failProps = {
  handleFailClose: any;
  failOpen: boolean;
};

export const SingupSuccess = ({
  successOpen,
  handleSuccessClose,
}: successProps) => {
  return (
    <Dialog
      open={successOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Success</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          회원가입에 성공하였습니다
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSuccessClose} color="primary">
          로그인하기
        </Button>
        <Button onClick={handleSuccessClose} color="primary" autoFocus>
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const SignupFail = ({ failOpen, handleFailClose }: failProps) => {
  return (
    <Dialog
      open={failOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Fail</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          중복된 계정입니다
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFailClose} color="primary" autoFocus>
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};
