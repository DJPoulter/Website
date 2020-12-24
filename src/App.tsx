/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ROUTES } from "@/constants";
import { HomePage } from "@/pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

library.add(fab, fas);

function App() {
  return (
    <Router>
      <Switch>
        {" "}
        <Route path={ROUTES.HomePage} exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
