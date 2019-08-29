import React from 'react';
import "./style.css";



const Location = (props) => {
    const location = props.location;
    const address = props.address;
const URL = "https://maps.google.com/maps?q="+location+address+"&hl=es;z=14&amp;&output=svembed"
    console.log(location +" "+ address)

    return (
        <div className="location_wrapper">
            <iframe 
                title="map"
                src={URL}
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

