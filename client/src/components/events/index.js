import React from "react";
import "./style.css";
import SimpleModal from "../modal";
import Calendar from "../calendar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EventList from "./eventList";
import Table from "../table";

function Event({ children }) {
  return (
    <Grid container justify="center">
      <Grid item xs={3}>
        <h2 className="eventHeader"> My Events</h2>

        <SimpleModal />

        <EventList />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={6}>
        <div className="calendar">
          <Card>
            <CardContent>
              <Calendar />
            </CardContent>
          </Card>
          <br />

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Table />
              </CardContent>
            </Card>
          </Grid>
          <br />
        </div>
      </Grid>
    </Grid>
  );
}
export default Event;
