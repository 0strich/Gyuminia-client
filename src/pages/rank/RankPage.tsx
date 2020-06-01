import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RankForm from "../../components/rank/RankForm";
import Loading from "../../components/etc/Loading";
import { isEmpty } from "../../index";
import { reducerState } from "../../modules";
import { ranking } from "../../modules/character";

const RankPage = () => {
  const dispatch = useDispatch();
  const { rankInfo } = useSelector((state: reducerState) => state.character);

  useEffect(() => {
    dispatch(ranking());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      {isEmpty(rankInfo) ? <Loading /> : <RankForm rankInfo={rankInfo} />}
    </div>
  );
};

export default RankPage;
