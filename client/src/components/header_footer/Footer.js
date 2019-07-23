import React from 'react';
import Fade from "react-reveal/Fade";

const Footer = () => {
    return (
        <footer className="bck_dark">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Life Happens</div>
                <div className="footer_copyright">
                    Life Happens 2019. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;