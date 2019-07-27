import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

import Dashboard from "./pages/Dashboard";
import EventTemp from "./pages/EventTemp";

import Register from './components/Register/register.js'

import "./main.css";


function App() {
  return (
    <Router>
      <div>
        <Switch>
       
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route exact path="/user/event" component={EventTemp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
