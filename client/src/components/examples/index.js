import React from "react";
import eventImage from "../../resources/images/event.PNG";
import Grid from "@material-ui/core/Grid";
//  import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Examples({ children }) {
  return (
    <div className="exampleContainer">
      <h1>Examples</h1>
      <Grid container justify="center">
        <Grid item xs={2}>
          <Card>
            <CardMedia
              component="img"
              alt="Event example"
              height="140"
              image={eventImage}
              title="Event Example"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Event Countdown
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is an example of an event with a countdown.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Examples;
