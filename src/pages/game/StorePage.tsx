import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weaponData } from "../../modules/weapon";
import { reducerState } from "../../modules";
import StoreForm from "../../components/game/StoreForm";
import Loading from "../../components/etc/Loading";
import { isEmpty } from "../../index";

const StorePage = () => {
  const dispatch = useDispatch();
  const weapons = useSelector((state: reducerState) => state.weapon.weapons);

  useEffect(() => {
    dispatch(weaponData());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {!isEmpty(weapons) ? <StoreForm weapons={weapons} /> : <Loading />}
    </div>
  );
};

export default StorePage;
