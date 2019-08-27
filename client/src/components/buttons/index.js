import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PageviewIcon from "@material-ui/icons/Pageview";
// import ShareIcon from "@material-ui/icons/Share";

import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import Share from "./Share";
import moment from "moment";
 import EditModal from "../modal/EditModel";



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
  const url = "/user/event/page/" + props.id;
  const deleteEvent = () => {
    console.log(props.id);

    axios.get("/api/users/events/" + props.id)
      .then(res => {

        window.location.reload();
      })


  }

  const updateEvent = () => {
    console.log(props.id);

   

    // axios call to display & update from db
  }


  const goToEvent = () => {
    console.log(props.id);
    var win = window.open(url, '_blank');
    win.focus();
    
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
          id={props.id}
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
          
          <EditModal
            id={props.id}
            name={props.name}
            date={moment(props.date).format('MMMM Do, YYYY')}
            time={props.time}
            location={props.location}
            description={props.description}
            address={props.address}
            ticketTitle={props.ticketTitle}
            ticketPrice={props.ticketPrice}
            ticketDescription={props.ticketDescription}
            discDate={props.discDate}
            percentOff={props.percentOff}
            image1={[props.image1]}
            image2={[props.image2]}
            // image2={props.inspirationalPhoto2}
          />
           
        </IconButton>
      </Tooltip>

      <Tooltip title="Share">
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Share"
        >
          <Share
            id={props.id}
            name={props.name} 
            
            image={props.image}
            description={props.description} 
            /> 
            
        </IconButton>
      </Tooltip>

     

    </div>
  );
}
