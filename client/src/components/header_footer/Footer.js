import React from "react";
import Fade from "react-reveal/Fade";
// import Grid from '@material-ui/core/Grid';

const Footer = () => {
  return (
    // <Grid container>
    <footer className="bck_dark">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Eventize</div>
        <div className="footer_copyright">
          Eventize 2019. All rights reserved.
        </div>
      </Fade>
    </footer>
    // </Grid>
  );
};

export default Footer;
