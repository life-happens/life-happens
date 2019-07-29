import React from "react";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    height: 300,
    minWidth: 200,
    padding: theme.spacing(2),
    justifyContent: "center"
  }
}));

function HowItWorks() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div className="howContainer">
      <h1 id="howHeader"> How it works </h1>

      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item xs={2}>
            <Card className={classes.card}>
              <i className="fas fa-calendar-day fa-7x" />
              <h2>Create an Event</h2>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.card}>
              <i className="fas fa-dollar-sign fa-7x" />
              <h2>Add/Track Sales</h2>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.card}>
              <i className="fas fa-user-friends fa-7x" />
              <h2>Share</h2>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default HowItWorks;
