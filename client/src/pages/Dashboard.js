import React, { Component } from "react";
import Events from "../components/events/index";
import Footer from "../components/header_footer/Footer";
import Logout from "../components/buttons/Logout";
import axios from "axios";



const logOutButton = () => {
  axios.get("/api/user/logout")
  .then(res => {

    
  })
}

class Dashboard extends Component {



  render() {
    return (
      <div>
        <Logout onClick={logOutButton}/>
        <h1 className="dash_Header">Dashboard</h1>
        <Events />
        <Footer />
      </div>
        );
      }
    }
    
    export default Dashboard;
