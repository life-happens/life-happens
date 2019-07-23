import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
import Events from "../components/events/index";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import Calendar from "../components/calendar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron>
          <h1>Dashboard</h1>
        </Jumbotron>

        <Events />
        <Calendar></Calendar>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
