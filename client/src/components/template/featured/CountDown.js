import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';


class CountDown extends Component {
    
    // constructor(props) {
    //     super(props);
      
        // console.log("this " + props.eventDate)
        
        state = {

            // Replace this date with passed in date
            deadline:'',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    // }
    // getDeadline() {
    //     console.log(this.props.eventDate);
        
    // }

        getTimeUntil(deadline){
           
            const date = this.props.eventDate
            const time = Date.parse(date) - Date.parse(new Date());
            if (time < 0) {
                console.log("This event has passed")
            } else {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
               

                this.setState({
                    days,
                    hours,
                    minutes,
                    seconds,
                    deadline
                    
                })
            }

        }

        componentDidMount(){
            console.log("pls" + this.props.eventDate); 

           setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
            
        }
        render() {
            return (
                <Slide left delay={1000}>
                    <div className="countdown_wrapper">
                        <div className="countdown_top">
                            Event starts in
                </div>
                        <div className="countdown_bottom">
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.days}
                                </div>
                                <div className="countdown_tag">
                                    Days
                        </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.hours}
                                </div>
                                <div className="countdown_tag">
                                    Hours
                        </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.minutes}
                                </div>
                                <div className="countdown_tag">
                                    Minutes
                        </div>
                            </div>
                            <div className="countdown_item">
                                <div className="countdown_time">
                                    {this.state.seconds}
                                </div>
                                <div className="countdown_tag">
                                    Seconds
                        </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            );
        }
    }

export default CountDown;