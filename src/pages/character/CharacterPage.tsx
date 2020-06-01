import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../modules";
import CharacterForm from "../../components/character/CharacterForm";
import { characterInfo, newChar } from "../../modules/character";
import Loading from "../../components/etc/Loading";
import { isEmpty } from "../../index";

export type newCharPropsType = {
  open: boolean;
  handleClickOpen: any;
  handleClose: any;
  setCharacterName: Function;
  newCharSubmit: Function;
};

const CharacterPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const { charInfo } = useSelector((state: reducerState) => state.character);
  const { userId } = useSelector((state: reducerState) => state.auth);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const newCharSubmit = () => {
    dispatch(newChar(userId, characterName));
  };

  const newCharProps = {
    open,
    handleClickOpen,
    handleClose,
    setCharacterName,
    newCharSubmit,
  };

  useEffect(() => {
    dispatch(characterInfo(userId));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {isEmpty(charInfo) ? (
        <Loading />
      ) : (
        <CharacterForm charInfo={charInfo} newCharProps={newCharProps} />
      )}
    </div>
  );
};

export default CharacterPage;
