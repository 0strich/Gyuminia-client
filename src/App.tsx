import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Game from "./components/game/Game";
import Store from "./components/game/Store";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import RankPage from "./pages/rank/RankPage";
import CharacterPage from "./pages/character/CharacterPage";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography className="app" component="div">
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/rank" component={RankPage} />
              <Route exact path="/character" component={CharacterPage} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/store" component={Store} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
