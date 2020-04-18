import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
