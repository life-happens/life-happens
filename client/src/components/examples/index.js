import React from "react";
import eventImage from "../../resources/images/event.PNG";
import eventImage2 from "../../resources/images/slide_two.jpg"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Examples({ children }) {
  const [spacing] = React.useState(4);
  return (
    <div className="exampleContainer">
       <br /> 
      <h1 className="exampleHeader">Examples</h1>
      <Grid container justify="center" spacing={spacing}>
        <Grid item xs={3}>
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

        <Grid item xs={3}>
          <Card>
            <CardMedia
              component="img"
              alt="Event example"
              height="140"
              image={eventImage2}
              title="Event Example"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Event Promotion
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Advertise your event and where it is located.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
export default Examples;
