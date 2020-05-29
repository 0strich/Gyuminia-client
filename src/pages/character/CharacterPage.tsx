import React from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../modules";
import CharacterForm from "../../components/character/CharacterForm";
import Loading from "../../components/etc/Loading";

const isEmpty = require("lodash.isempty");

const CharacterPage = () => {
  const charInfo = useSelector(
    (state: reducerState) => state.authReducer.charInfo
  );

  return (
    <div>
      {!isEmpty(charInfo) ? <CharacterForm charInfo={charInfo} /> : <Loading />}
    </div>
  );
};

export default CharacterPage;
