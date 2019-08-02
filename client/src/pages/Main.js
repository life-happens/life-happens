import React, { Component } from "react";
import Jumbotron from "../components/jumbotron/index";
// import About from "../components/about/index";
import Login from "../components/login/index";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import NavButtons from "../components/navButtons";
import HowItWorks from "../components/howitworks";
import { Element } from "react-scroll";

import Examples from "../components/examples";

class Main extends Component {
  render() {
    return (
      <div>
        <Header>
          <NavButtons />
        </Header>
        <Jumbotron>
          <div>
            <h1>Life Happens</h1>
            <h3>An event template customization and ticketing site for the occasional entrepreneur.</h3>
          </div>
        </Jumbotron>
        {/* <About /> */}
        <Element name="how_it_works">
          <HowItWorks />
        </Element>
        <Element name="examples">
          <Examples />
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
