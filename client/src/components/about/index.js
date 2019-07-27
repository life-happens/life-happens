import React from "react";

function About({ children }) {
  return (
    <div className="aboutContainer">
      <h2>About</h2>
      <p id="aboutText" >
        Create an event and countdown to the expected day! Upload images to keep
        you inspired or excited about your event. You can add images of the
        event as well as journal your experience.
      </p>
    </div>
  );
}
export default About;
