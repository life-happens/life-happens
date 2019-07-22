import React from 'react';
import "./style.css";

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1744.2946680937569!2d-81.30281782202071!3d29.029145287069134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4b6a9f2d4f9f3d!2sAbbey+Bar!5e0!3m2!1sen!2sus!4v1563374106843!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                ></iframe>
                <div className="location_tag">
                    <div>Location</div>
                </div>
        </div>
    );
};

export default Location;