import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterInfo } from "../modules/character";
import { reducerState } from "../modules";

const useCharacter = () => {
  const charInfo = useSelector(
    (state: reducerState) => state.charReducer.charInfo
  );
  const dispatch = useDispatch();
  const getCharInfo = useCallback(() => dispatch(characterInfo()), [dispatch]);
  return { charInfo, getCharInfo };
};

export default useCharacter;
