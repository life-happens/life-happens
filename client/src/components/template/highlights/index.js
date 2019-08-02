import React from 'react';
import Description from "./Description";
import Discount from "./Discount";
import "./style.css";

const Highlights = (props) => {
    return (
        <div className="highlight_wrapper">
            <Description  description={props.description}/>
            <Discount />
        </div>
    );
};

export default Highlights;