import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weaponData } from "../../modules/weapon";
import { reducerState } from "../../modules";
import StoreForm from "../../components/game/StoreForm";
import Loading from "../../components/etc/Loading";

const isEmpty = require("lodash.isempty");

const StorePage = () => {
  const dispatch = useDispatch();
  const weapons = useSelector(
    (state: reducerState) => state.weaponReducer.weapons
  );
  const getWeapons = useCallback(() => dispatch(weaponData()), [dispatch]);

  useEffect(() => {
    getWeapons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!isEmpty(weapons) ? <StoreForm weapons={weapons} /> : <Loading />}
    </div>
  );
};

export default StorePage;
