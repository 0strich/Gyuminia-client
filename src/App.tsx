import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AuthRoute from "./pages/auth/AuthRoute";
import GamePage from "./pages/game/GamePage";
import HomePage from "./pages/home/HomePage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import RankPage from "./pages/rank/RankPage";
import CharacterPage from "./pages/character/CharacterPage";
import StorePage from "./pages/game/StorePage";
import "./css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography className="app" component="div">
            <Switch>
              <Route exact path="/login" component={SigninPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/rank" component={RankPage} />
              <AuthRoute exact path="/character" component={CharacterPage} />
              <AuthRoute exact path="/game" component={GamePage} />
              <AuthRoute exact path="/store" component={StorePage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
