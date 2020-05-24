import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(6),
    },
  },
}));

type Props = { setAdventure: Function };

const Avoid = ({ setAdventure }: Props) => {
  const classes = useStyles();
  const history = useHistory();

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
        <Button onClick={() => setAdventure(true)}>모험</Button>
        <Button>휴식</Button>
        <Button onClick={() => history.push("/store")}>상점</Button>
        <Button onClick={() => history.goBack()}>종료</Button>
      </ButtonGroup>
    </div>
  );
};

export default Avoid;
