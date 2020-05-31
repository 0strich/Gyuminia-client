import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { homeStyles } from "../../css/useStyles";

const HomeForm = () => {
  const homeStyle = homeStyles();
  const history = useHistory();

  return (
    <div className={homeStyle.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={homeStyle.title}>
            Welcome To Gyuminia
          </Typography>
          <Button color="inherit" onClick={() => history.push("/login")}>
            로그인
          </Button>
          <Button color="inherit" onClick={() => history.push("/signup")}>
            회원가입
          </Button>
          <Button color="inherit" onClick={() => history.push("/rank")}>
            캐릭터 랭킹
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeForm;
