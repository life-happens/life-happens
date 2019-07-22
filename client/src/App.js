import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import "./main.css";


function App() {
  return (
    <Router>
      <div>
<Switch>
<Route exact path="/" component={Main} />
</Switch>
      </div>
      </Router>
  );
}

export default App;
