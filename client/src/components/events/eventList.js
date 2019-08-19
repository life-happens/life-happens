import React, { Component } from "react";
import axios from "axios";
import IconButtons from "../buttons";
import Card from "@material-ui/core/Card";
class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    console.log(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    axios.get("/api/users/events").then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }
  render() {
    return (
      <ul className="eventList">
        {this.state.events.map(event => (
          <Card className="cardList">
            <ol className="eventListItem" key={event._id} id={event._id}>
              <div>
                {event.name}
                <IconButtons
                  className="event_buttons"
                  key={event._id}
                  id={event._id}
                  date={event.date}
                  name={event.name}
                  description={event.description}
                  // onClick={com}
                />
              </div>
            </ol>{" "}
          </Card>
        ))}
      </ul>
    );
  }
}
export default EventList;




