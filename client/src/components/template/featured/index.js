import React from 'react';
import Carrousel from "./Carrousel";
import CountDown from "./CountDown";
import "./style.css";

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carrousel />
            <div className="event_name">
                <div className="wrapper">
                    {/* Pass in event name */}
                </div>
            </div>
            <CountDown />
        </div>
    );
};

export default Featured;