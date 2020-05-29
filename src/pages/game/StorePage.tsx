import React, { useEffect } from "react";
import StoreForm from "../../components/game/StoreForm";
import useWeapons from "../../hooks/useWeapons";
import Loading from "../../components/etc/Loading";

const isEmpty = require("lodash.isempty");

const StorePage = () => {
  const { weapons, getWeapons } = useWeapons();

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
