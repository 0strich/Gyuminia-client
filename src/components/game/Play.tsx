import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fight from "./playButtons/Fight";
import Avoid from "./playButtons/Avoid";
import { playStyles } from "../../css/useStyles";

const Play = () => {
  const playStyle = playStyles();
  const [isAdventure, setAdventure] = useState(false);

  return (
    <div className={playStyle.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={playStyle.paper}>맵 이름</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={playStyle.paper}>공격, 턴</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={playStyle.paper}>구상중</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={playStyle.paper}>몬스터 정보</Paper>
        </Grid>
        <Grid item xs={2}>
          {isAdventure ? (
            <Fight setAdventure={setAdventure} />
          ) : (
            <Avoid setAdventure={setAdventure} />
          )}
        </Grid>
        <Grid item xs={5}>
          <Paper className={playStyle.paper}>캐릭터 정보</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Play;
