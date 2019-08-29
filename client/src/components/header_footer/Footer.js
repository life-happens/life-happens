import React from "react";
import Fade from "react-reveal/Fade";
// import Grid from '@material-ui/core/Grid';
import Logo from "../../resources/images/eventize.png"

const Footer = () => {
  return (
    // <Grid container>
    <footer className="bck_dark">
      <Fade delay={500}>
        <div className="font_righteous" >
          <img src={Logo} alt="eventize" style={{maxWidth:250}}/>
        </div>
        <div className="footer_copyright">
          Eventize 2019. All rights reserved.
        </div>
      </Fade>
    </footer>
    // </Grid>
  );
};

export default Footer;
