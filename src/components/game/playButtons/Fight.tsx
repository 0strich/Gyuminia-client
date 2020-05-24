import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(6),
    },
  },
}));

type Props = { setAdventure: Function };

const Fight = ({ setAdventure }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        size="large"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
        fullWidth
      >
        <Button>공격</Button>
        <Button>회복</Button>
        <Button onClick={() => setAdventure(false)}>도망</Button>
      </ButtonGroup>
    </div>
  );
};

export default Fight;
