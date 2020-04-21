import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

// Home 컴포넌트
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Home Page</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Gyuminia</Paper>
          <Paper className={classes.paper}>규미니아</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>캐릭터 슬롯</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>캐릭터 슬롯</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>캐릭터 슬롯</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
