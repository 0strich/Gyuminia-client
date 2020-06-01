import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { tokenExpireStyles } from "../../css/useStyles";

const TokenExpireModal = () => {
  const tokenExpireStyle = tokenExpireStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    history.push("/signin");
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={tokenExpireStyle.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={tokenExpireStyle.paper}>
            <h2 id="transition-modal-title">인증 토큰 만료</h2>
            <p id="transition-modal-description">
              인증토큰이 만료되었습니다
              <br />
              다시 로그인해 주세요
            </p>
            <Button onClick={handleClose}>확인</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TokenExpireModal;
