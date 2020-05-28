import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Home from "./components/Home";
import Ranking from "./components/Ranking";
import Character from "./components/Character";
import Game from "./components/game/Game";
import Store from "./components/game/Store";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
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
              <Route exact path="/ranking" component={Ranking} />
              <Route exact path="/character" component={Character} />
              <Route exact path="/game" component={Game} />
              <Route exact path="/store" component={Store} />
              <Route path="/" component={Home} />

              {/* <Route path="/" component={HomePage} /> */}
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
