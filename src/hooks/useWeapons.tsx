import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weaponData } from "../modules/weapon";
import { reducerState } from "../modules";

const useWeapons = () => {
  const dispatch = useDispatch();
  const weapons = useSelector(
    (state: reducerState) => state.weaponReducer.weapons
  );
  const getWeapons = useCallback(() => dispatch(weaponData()), [dispatch]);
  return { weapons, getWeapons };
};

export default useWeapons;
