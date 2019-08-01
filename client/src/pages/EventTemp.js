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
 import axios from "axios";


class EventTemp extends Component {
  constructor(props) {
    super(props)

    console.log(props.location.pathname)

    
  
// Query DB with specific _id and Change state with db information

  this.state = {

    date: "Nov, 4, 2019",
    description: "All the Words",
    location: "Here",
    eventName: "YOUR AWESOME EVENT",
    image: ["https://www.shutterfly.com/ideas/wp-content/uploads/2016/06/30th-birthday-party-ideas-5.jpg"],
    discDate: "Oct 29, 2019",
    percentOff: 25,
    ticketPrice: [500],
    ticketTitle: ["Balcony Seats"]
}

}
componentDidMount(){
 
console.log(this)

var url = this.props.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
 console.log(id);

  axios.get("/api/users/events/",{
    params: {
      _id: id
    }
  } )
  .then(res => {
    console.log(res);
    const event = res.data[0]
    this.setState({ 
      eventName: event.name, 
      date: event.date,
      description: event.description,
      location: event.location,
      image: event.inspirationalPhoto,
      discDate: "Oct 29, 2019",
      percentOff: 25,
      ticketPrice: [500],
      ticketTitle: ["Balcony Seats"]
    });
  })
}

  render() {
    return (
      <div className="App" style={{ height: "1600px" }}>
        <Header />
        <Element name="featured">
          <Featured eventName={this.state.eventName} image={this.state.image} date={this.state.date} />
        </Element>
        <Element name="venue_info">
          <VenueInfo date={this.state.date} location={this.state.location} />
        </Element>
        <Element name="highlight">
          <Highlights description={this.state.description} discDate={this.state.discDate} percentOff={this.state.percentOff} />
        </Element>
        <Element name="pricing">
            <Pricing ticketTitle={this.state.ticketTitle} ticketPrice={this.state.ticketPrice} />
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
