import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
 import About from "../components/about/index";
 import Login from "../components/login/index";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import NavButtons from "../components/navButtons";
import HowItWorks from "../components/howitworks";
import { Element } from "react-scroll";



class Main extends Component {
  render() {
    return (
      <div>
        <Header>
          <NavButtons />
        </Header>
        <Jumbotron>
          <div className="jumboText">
            <h1 className="jumboHeadrer1">Eventize</h1>
            <h2 className="jumboHeader">An event template customization and ticketing site for the occasional entrepreneur.</h2>
          </div>
        </Jumbotron>
         <About /> 
        <Element name="how_it_works">
          <HowItWorks />
        </Element>
        <Element name="examples">
          {/* <Examples /> */}
        </Element>
        <Element name="login">
            <Login />  
        </Element>
         <Footer /> 
      </div>
    );
  }
}


export default Main;
