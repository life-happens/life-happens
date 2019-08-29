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

    // const date = props.date;
  
// Query DB with specific _id and Change state with db information

  this.state = {

    date: "November 24, 2019",
    description: "Let your community know about your event with a professional looking website. ",
    location: "Your Event Venue",
    address: "39 S Magnolia Ave, Orlando, FL 32801",
    eventName: "YOUR AWESOME EVENT",
    image: ["https://www.newsbugz.com/wp-content/uploads/2019/04/best-party-planner.jpg", "https://www.shutterfly.com/ideas/wp-content/uploads/2016/06/30th-birthday-party-ideas-5.jpg"],
    discDate: "Oct 10, 2019",
    percentOff: 25,
    ticketPrice: 85,
    ticketTitle: "Single Entry",
    ticketDesc: "Description of what ticket includes"
}
}


componentDidMount(){
 
var url = this.props.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);


  axios.get("/api/users/events/",{
    params: {
      _id: id
    }
  } )
  .then(res => {

    for(var i = 0; i < res.data.length; i++){
      if(res.data[i]._id === id) {
        console.log(res);
        const event = res.data[i]
        this.setState({ 
          eventName: event.name, 
          date: event.date,
          time: event.time,
          description: event.description,
          location: event.location,
          address: event.address,
          image: event.inspirationalPhoto,
          discDate: event.discDate,
          percentOff: event.percentOff,
          ticketPrice: event.ticketPrice,
          ticketTitle: event.ticketTitle,
          ticketDesc: event.ticketDescription
        });
      }
    }

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
          <VenueInfo date={this.state.date} time={this.state.time} location={this.state.location} address={this.state.address} />
        </Element>
        <Element name="highlight">
          <Highlights description={this.state.description} discDate={this.state.discDate} percentOff={this.state.percentOff} />
        </Element>
        <Element name="pricing">
            <Pricing ticketTitle={this.state.ticketTitle} price={this.state.ticketPrice} ticketDesc={this.state.ticketDesc}/>
        </Element>
        <Element name="location">
          <Location location={this.state.location} address={this.state.address}/>
        </Element>
        <Footer />
      </div>
    );
  }
}

export default EventTemp;
