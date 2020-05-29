import React, { useEffect, useState } from "react";
import axios from "axios";
import RankForm from "../../components/rank/RankForm";
import Loading from "../../components/etc/Loading";

const isEmpty = require("lodash.isempty");

const RankPage = () => {
  const [charInfo, setCharInfo] = useState(null);

  useEffect(() => {
    try {
      axios("http://localhost:5001/characters/rank").then((res) => {
        setCharInfo(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {!isEmpty(charInfo) ? <RankForm charInfo={charInfo} /> : <Loading />}
    </div>
  );
};

export default RankPage;
