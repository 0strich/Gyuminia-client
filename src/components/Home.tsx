import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { homeStyles } from "../css/useStyles";

const Home = () => {
  const homeStyle = homeStyles();
  const history = useHistory();

  return (
    <div className={homeStyle.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={homeStyle.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={homeStyle.title}>
            Welcome To Gyuminia
          </Typography>
          <Button color="inherit" onClick={() => history.push("/login")}>
            로그인
          </Button>
          <Button color="inherit" onClick={() => history.push("/auth/signup")}>
            회원가입
          </Button>
          <Button color="inherit" onClick={() => history.push("/ranking")}>
            캐릭터 랭킹
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Home;
