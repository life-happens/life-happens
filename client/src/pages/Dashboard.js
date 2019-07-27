import React, { Component } from "react";
import Events from "../components/events/index";
import Footer from "../components/header_footer/Footer";
import Calendar from "../components/calendar";


class Dashboard extends Component {
  render() {
    return (
      <div>
         <h1 className="dash_Header">Dashboard</h1>
        <Events />
        {/* <Calendar /> */}
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
