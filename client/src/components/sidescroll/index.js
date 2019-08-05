import React from "react";
import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideScroll = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -35
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List copmonent="nav">
        <ListItem button onClick={() => scrollToElement("how_it_works")}>
          {" "}
          How it Works
        </ListItem>
        <ListItem button onClick={() => scrollToElement("examples")}>
          Examples
        </ListItem>
        <ListItem button onClick={() => scrollToElement("login")}>
          Sign In
        </ListItem>

        {/* <ListItem button onClick={() => scrollToElement("venue_info")}>
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
                </ListItem> */}
      </List>
    </Drawer>
  );
};

export default SideScroll;
