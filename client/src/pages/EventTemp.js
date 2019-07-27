import React, { Component } from "react";
import "../main.css";
import { Element } from "react-scroll";
import Header from "../components/template/header_footer/Header";
import Featured from "../components/template/featured";
import VenueInfo from "../components/template/venueInfo";
import Highlights from "../components/template/highlights";
import Pricing from "../components/template/Pricing";
import Location from "../components/template/Location";
import Footer from "../components/header_footer/Footer";

class EventTemp extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1600px" }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue_info">
          <VenueInfo />
        </Element>
        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default EventTemp;
