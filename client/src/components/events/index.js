import React from "react";
import "./style.css";
import SimpleModal from "../modal";

import Calendar from "react-calendar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SaleImage from "../../resources/images/saleGraph.jpg";
import EventList from './eventList';


function Event({ children }) {
  return (
    <Grid container justify="center">
    <Grid item xs={4}>
    {/* <div className="event-container"> */}
      <h2 className="eventHeader"> My  Events</h2>
      
      <SimpleModal />
      
      <EventList/>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={3}>
      <div className="calendar">
      <Calendar />
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <br></br>
      <Grid item xs={12}>
      <Card>
            <CardMedia
              component="img"
              alt="Sale Graph"
              height="140"
              image={SaleImage}
              title="Sale Graph"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sales Tracker
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      <br></br>
      </div>
      </Grid>
      </Grid>
      
   
  );
}
export default Event;
