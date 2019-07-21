import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
import Events from "../components/events/index";
import SimpleModal from "../components/modal";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Dashboard</h1>
        </Jumbotron>

        <Events />
      </div>
    );
  }
}

export default Dashboard;
