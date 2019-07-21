import React from "react";
import "./style.css";
import SimpleModal from "../modal";

function Event({ children }) {
  return (
    <div className="container">
      <h2> My Events</h2>
      <SimpleModal />
    </div>
  );
}
export default Event;
