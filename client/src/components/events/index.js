import React from "react";
import "./style.css";
import SimpleModal from "../modal";
import IconButtons from "../buttons"

function Event({ children }) {
  return (
    <div className="event-container">
      <h2> My Events</h2>
      <SimpleModal />
      <IconButtons/>

    </div>
  );
}
export default Event;
