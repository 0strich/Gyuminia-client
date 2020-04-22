import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fight from "./playButtons/Fight";
import Avoid from "./playButtons/Avoid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const Play = () => {
  const classes = useStyles();
  const [isAdventure, setAdventure] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>맵 이름</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>공격, 턴</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>구상중</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>몬스터 정보</Paper>
        </Grid>
        <Grid item xs={2}>
          {isAdventure ? (
            <Fight setAdventure={setAdventure} />
          ) : (
            <Avoid setAdventure={setAdventure} />
          )}
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>캐릭터 정보</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Play;
