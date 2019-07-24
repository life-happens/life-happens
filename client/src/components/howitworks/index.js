import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EventIcon from "@material-ui/icons/Event";
 import MoneyIcon from "@material-ui/icons/AttachMoney";
import GroupIcon from "@material-ui/icons/Group";
import "./style.css";
 import Grid from "@material-ui/core/Grid";
 import { makeStyles } from '@material-ui/core/styles';
 import Card from '@material-ui/core/Card';

 const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 250,
    minWidth: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function HowItWorks() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div className="howContainer">
      <h1 id="howHeader"> How it works </h1>
      
      <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={spacing}>
      <Grid item xs={2}>
      <Card className={classes.card}>
          <h2>Create an Event</h2>
          <IconButton>
            <EventIcon />
          </IconButton>
        </Card>
       </Grid>
       <Grid item xs={2}>
        <Card className={classes.card}>
          <h2>Add/Track Sales</h2>
           <IconButton>
            <MoneyIcon />
          </IconButton>
        </Card>
        </Grid>
        <Grid item xs={2}>
        <Card className={classes.card}>
          <IconButton>
            <GroupIcon />
          </IconButton>
          <h2>Share</h2>
        </Card>
        </Grid>
        </Grid>
        </Grid>
      </div>
    
  );
}
export default HowItWorks;