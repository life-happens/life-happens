import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EventIcon from "@material-ui/icons/Event";
 import MoneyIcon from "@material-ui/icons/AttachMoney";
import GroupIcon from "@material-ui/icons/Group";
import "./style.css"
 
function HowItWorks() {
  return (
    <div className="howContainer">
      <h1 id="howHeader"> How it works </h1>
      {/* <div className="wrapper"> */}
        <div className="eventBox">
          <h2>Create an Event</h2>
          <IconButton>
            <EventIcon />
          </IconButton>
        </div>
         <div className="saleBox">
          <h2>Add/Track Sales</h2>
           <IconButton>
            <MoneyIcon />
          </IconButton>
        </div> 
        <div className="shareBox">
          <h2>Share</h2>
          <IconButton>
            <GroupIcon />
          </IconButton>
        </div>
      </div>
    // </div>
  );
}
export default HowItWorks;