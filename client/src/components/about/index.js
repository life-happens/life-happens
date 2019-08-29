import React from "react";
import Grid from '@material-ui/core/Grid';

function About({ children }) {
  return (
    <Grid container>
      <Grid item xs={12}>
    <div className="aboutContainer">
      <h2 className="aboutHeader">About</h2>
      <p id="aboutText">
      Eventize is your resource to advertise, promote, and sell tickets for an upcoming event. Our custom templates will draw the attention of your target audience with the ease of just a few clicks. Eventize is for anyone wanting to promote an event not just for business purposes. Register now to get started!
      </p>
    </div>
    </Grid>
    
    </Grid>
  );
}
export default About;
