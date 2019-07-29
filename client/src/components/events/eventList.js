import React, { Component } from 'react';
import Axios from 'axios';
import IconButtons from "../buttons";

class EventList extends Component {

    state = {
        events: []
    };

    componentDidMount() {
        Axios.get('/api/users/events')
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }

    render() {
        return (
            <ul className="eventList">
                {this.state.events.map(event => <li className='eventListItem' key={event._id}>
                    <div>{event.name} <span className="event_buttons"><IconButtons /></span>
                    </div>
                </li>)}
            </ul>
        );
    }
}

export default EventList;