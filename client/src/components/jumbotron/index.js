import React from "react";
import "./style.css";
// import Grid from '@material-ui/core/Grid';

function Jumbotron({ children }) {
  return (
    // <Grid>
    <div
      style={{
        height: 400,
        clear: "both",
        paddingTop: 120,
        textAlign: "center"
      }}
      className="jumbotron font_righteous"
    >
      {children}
    </div>
    // </Grid>
  );
}

export default Jumbotron;
