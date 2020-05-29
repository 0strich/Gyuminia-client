import React from "react";
import CharacterForm from "../../components/character/CharacterForm";
import { useSelector } from "react-redux";
import { reducerState } from "../../modules";

const CharacterPage = () => {
  const charInfo = useSelector(
    (state: reducerState) => state.authReducer.charInfo
  );

  return (
    <div>
      <CharacterForm charInfo={charInfo} />
    </div>
  );
};

export default CharacterPage;
