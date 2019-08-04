import React from 'react';
import { scroller } from "react-scroll";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500, 
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    // function openInNewTab(url) {
    //     var win = window.open(url, '_blank');
    //     win.focus();
    //   }

    return (
       <Drawer
           anchor="right"
           open={props.open}
           onClose={()=> props.onClose(false)}
        >
           
            <List copmonent="nav">
                <ListItem button onClick={() => scrollToElement("featured")}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement("venue_info")}>
                Venue Info
                </ListItem>
                <ListItem button onClick={() => scrollToElement("highlight")}>
               Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement("pricing")}>
                Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement("location")}>
                Location
                </ListItem>
                {/* <ListItem button >
                Back to Dashboard
                </ListItem> */}
            </List>
           
           
            
       </Drawer>
    );
};

export default SideDrawer;