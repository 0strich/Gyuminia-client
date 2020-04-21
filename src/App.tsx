import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/auth/Auth";
import Ranking from "./components/Ranking";
import Character from "./components/Character";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{ backgroundColor: "lightgray", height: "100vh" }}
          >
            <Switch>
              <Route exact path="/auth/:type" component={Auth} />
              <Route exact path="/ranking" component={Ranking} />
              <Route exact path="/character" component={Character} />
              <Route path="/" component={Home} />
            </Switch>
          </Typography>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
