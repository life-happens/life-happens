import React, { Component } from "react";
import Axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Card from "@material-ui/core/Card";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.css";

const localizer = momentLocalizer(moment);

class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    Axios.get("/api/users/events").then(res => {
      const events = res.data;
      let eventsArray = [];
      for (let i = 0; i < res.data.length; i++) {
        eventsArray.push({
          start: res.data[i].date,
          end: res.data[i].date,
          title: res.data[i].name
        });
      }
      this.setState({
        events: eventsArray
      });
      console.log(events);
    });
  }
  render() {
    return (
      <Card className="calCard">
        <div>
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            views={["month"]}
            events={this.state.events}
            style={{ height: "300px" }}          
          />
        </div>
      </Card>
    );
  }
}

export default EventCalendar;
