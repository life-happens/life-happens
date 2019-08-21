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

// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class Location extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: -1.2884,
//          lng: 36.8233
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDvpnM2iXcaMPP77S8boOhp09CCLY0Oh4A'
// })(Location);