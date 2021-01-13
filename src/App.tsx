/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { ROUTES } from "@/constants";
import { HomePage } from "@/pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

library.add(fab, fas);

function App() {
  return (
    <>
      {console.log(`  _____              _      _   _____            _ _            
 |  __ \\            (_)    | | |  __ \\          | | |           
 | |  | | __ _ _ __  _  ___| | | |__) |__  _   _| | |_ ___ _ __ 
 | |  | |/ _\` | '_ \\| |/ _ \\ | |  ___/ _ \\| | | | | __/ _ \\ '__|
 | |__| | (_| | | | | |  __/ | | |  | (_) | |_| | | ||  __/ |   
 |_____/ \\__,_|_| |_|_|\\___|_| |_|   \\___/ \\__,_|_|\\__\\___|_|   
       `)}

      <ToastContainer position="bottom-right" autoClose={8000} newestOnTop />
      <Router>
        <Switch>
          <Route path={ROUTES.HomePage} exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
