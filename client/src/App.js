import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

import "./main.css";

import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
