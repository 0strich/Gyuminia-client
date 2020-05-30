import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../modules";
import CharacterForm from "../../components/character/CharacterForm";
import Loading from "../../components/etc/Loading";
import { characterInfo } from "../../modules/character";

const isEmpty = require("lodash.isempty");

const CharacterPage = () => {
  const charInfo = useSelector(
    (state: reducerState) => state.character.charInfo
  );
  console.log("component charinfo ==> ", charInfo);

  return (
    <div>
      {!isEmpty(charInfo) ? <CharacterForm charInfo={charInfo} /> : <Loading />}
    </div>
  );
};

export default CharacterPage;
