import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PageviewIcon from "@material-ui/icons/Pageview";
import ShareIcon from "@material-ui/icons/Share";
import EditIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
// import axios from "axios";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));





export default function IconButtons(props) {
  const classes = useStyles();
  // console.log(props.id);
  
  const deleteEvent = () => {
    console.log(props.id);
    // pass in event id 
    // axios call to delete from db
  }

  const updateEvent = () => {
    console.log(props.id);
    // pass in event id 

    // axios call to display & update from db
  }
  const goToEvent = () => {
    console.log(props.id);
     // pass in event id 
    //route to filled out event template
  }

  const shareEvent = () => {
    console.log(props.id) 

    // Use react-share to capture url of shareable webpage and share on social media
  }

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton 
        className={classes.button} 
        onClick={deleteEvent}  
        aria-label="Delete"
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="View Page">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Pageview"
          onClick={goToEvent}
        >
          <PageviewIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Create"
          onClick={updateEvent}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Share">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Share"
          onClick={shareEvent}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
