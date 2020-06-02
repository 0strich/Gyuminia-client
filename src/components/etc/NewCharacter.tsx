import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { newCharPropsType } from "../../pages/character/CharacterPage";

type Props = { newCharProps: newCharPropsType };

const NewCharacter = ({ newCharProps }: Props) => {
  return (
    <div>
      <Button
        color="primary"
        size="large"
        onClick={newCharProps.handleClickOpen}
      >
        캐릭터 만들기
      </Button>
      <Dialog
        open={newCharProps.open}
        onClose={newCharProps.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          캐릭터명을 입력해 주세요
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            새로운 캐릭터 능력치는 기본 능력치로 자동 생성됩니다
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="characterName"
            label="캐릭터명"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              newCharProps.setCharacterName(e.target.value)
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => newCharProps.newCharSubmit()} color="primary">
            만들기
          </Button>
          <Button onClick={newCharProps.handleClose} color="primary">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewCharacter;
