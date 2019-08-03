import React, { Component } from "react";
import Events from "../components/events/index";
import Footer from "../components/header_footer/Footer";
// import Table from "../components/table";



class Dashboard extends Component {
  render() {
    return (
      <div>
         <h1 className="dash_Header">Dashboard</h1>
        <Events />
        {/* <Table /> */}
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
