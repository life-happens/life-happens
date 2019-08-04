import React from 'react';
import Carrousel from "./Carrousel";
import CountDown from "./CountDown";
import "./style.css";


const Featured = (props) => {
    console.log("featured " + props.date)
    return (
        <div style={{position: 'relative'}}>
            <Carrousel image={props.image} />
            <div className="event_name">
                <div className="wrapper">
                    {props.eventName}
                 
                    
                </div>
            </div>
            <CountDown eventDate={props.date}/>
        </div>
    );
};

export default Featured;