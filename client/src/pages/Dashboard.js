import React, { Component } from "react";
import Events from "../components/events/index";
import Footer from "../components/header_footer/Footer";




class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="dash_Header">Dashboard</h1>

        <Events />
        <Footer />
      </div>
        );
      }
    }
    
    export default Dashboard;
