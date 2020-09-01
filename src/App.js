import React from "react";
import "./App.css";
import { Navbar, IndoStatistic, Provinsi, GlobalStatistic } from "./Components";
import { Home } from "./Page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/provinsi">
          <Provinsi />
        </Route>
        <Route path="/indo">
          <IndoStatistic />
        </Route>
        <Route path="/global">
          <GlobalStatistic />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
