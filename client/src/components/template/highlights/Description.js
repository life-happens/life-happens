import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = (props) => {
    console.log(props)
    
    return (
         <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                {props.description}
                </div>
            </div>
         </Fade> 
    );
    

};

export default Description;