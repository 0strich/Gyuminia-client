import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../modules";
import CharacterForm from "../../components/character/CharacterForm";
import { characterInfo, newChar, reset } from "../../modules/character";

export type newCharPropsType = {
  open: boolean;
  status: number | null;
  handleClickOpen: any;
  handleClose: any;
  setCharacterName: Function;
  newCharSubmit: Function;
  reset: any;
};

const CharacterPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const { charInfo, status } = useSelector(
    (state: reducerState) => state.character
  );
  const { userId } = useSelector((state: reducerState) => state.auth);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const newCharSubmit = () => {
    dispatch(newChar(userId, characterName));
    // console.log("submit status ==> ", status);
  };

  const newCharProps = {
    open,
    status,
    handleClickOpen,
    handleClose,
    setCharacterName,
    newCharSubmit,
    reset,
  };

  useEffect(() => {
    dispatch(characterInfo(userId));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      <CharacterForm charInfo={charInfo} newCharProps={newCharProps} />
    </div>
  );
};

export default CharacterPage;
