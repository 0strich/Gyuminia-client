import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { homeStyles } from "../../css/useStyles";

type Props = { onSubmit: Function; username: string };

// need props
// username(ID)
const Navigation = ({ onSubmit, username }: Props) => {
  const homeStyle = homeStyles();

  return (
    <div className={homeStyle.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={homeStyle.title}>
            Welcome To Gyuminia
          </Typography>
          <span>{username}</span>
          <Button color="inherit" onClick={() => onSubmit()}>
            로그아웃
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
