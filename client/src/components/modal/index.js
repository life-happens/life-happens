import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    backgroundColor: "white",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding:"10px",
    width: "900px"
  },
  container: {
    display: "flex",
    margin: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%"
   
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    eventName: "",
    date: "",
    time: "",
    location: "",
    address: "",
    description: "",
    inspirationalPhoto: [],
    discDate: "",
    percentOff: "",
    ticketPrice: [],
    ticketTitle: [],
    ticketDescription: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    axios.post('/api/users/event', {
      name: values.eventName,
      date: values.date,
      time: values.time,
      location: values.location,
      address: values.address,
      description: values.description,
      inspirationalPhoto: [values.inspirationalPhoto1, values.inspirationalPhoto2],
      ticketPrice: values.ticketPrice,
      ticketTitle: values.ticketTitle,
      ticketDescription: values.ticketDescription,
      discDate: values.discDate,
      percentOff: values.percentOff
    }, {headers: {'Accept': 'application/json'}})
    .then(function (response){
      console.log(response);
      

    })
    .catch(function (error){
      console.log(error);
    });
    
    handleClose();
  }



  const handleClose = () => {
    setValues('');
    window.location.reload();
    setOpen(false);
    

  };

  return (
    <div className="wrapper">
      <div>
        <button className="add_event_button"type="button" onClick={handleOpen}>
          Add Event
        </button>
      </div>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.root}>
        <button onClick={handleClose} className="closeButton">X</button>
          <form className={classes.container} noValidate autoComplete="off">
            <div>
              <h2 id="header">Create Event</h2>
            </div>
            <div>
              <TextField
                id="outlined-name"
                label="Event Name"
                className={classes.textField}
                value={values.eventName}
                onChange={handleChange("eventName")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Date"
                className={classes.textField}
                value={values.date}
                onChange={handleChange("date")}
                margin="normal"
                variant="outlined"
              />
               <TextField
                id="outlined-name"
                label="Time"
                className={classes.textField}
                value={values.time}
                onChange={handleChange("time")}
                margin="normal"
                variant="outlined"
              />
                <TextField
                id="outlined-name"
                label="Location Name"
                className={classes.textField}
                value={values.location}
                onChange={handleChange("location")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Location Address"
                className={classes.textField}
                value={values.address}
                onChange={handleChange("address")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Ticket Title"
                className={classes.textField}
                value={values.ticketTitle}
                onChange={handleChange("ticketTitle")}
                margin="normal"
                variant="outlined"
              />
               <TextField
                id="outlined-name"
                label="Ticket Price"
                className={classes.textField}
                value={values.ticketPrice}
                onChange={handleChange("ticketPrice")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Ticket Description (optional)"
                className={classes.textField}
                value={values.ticketDescription}
                onChange={handleChange("ticketDescription")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Date for Early Purchase Discount Cutoff (optional)"
                className={classes.textField}
                value={values.discDate}
                onChange={handleChange("discDate")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Discount Percentage for Early Purchase (optional)"
                className={classes.textField}
                value={values.percentOff}
                onChange={handleChange("percentOff")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Image URL"
                className={classes.textField}
                value={values.inspirationalPhoto1}
                onChange={handleChange("inspirationalPhoto1")}
                margin="normal"
                variant="outlined"
              />
                 <TextField
                id="outlined-name"
                label="Image URL"
                className={classes.textField}
                value={values.inspirationalPhoto2}
                onChange={handleChange("inspirationalPhoto2")}
                margin="normal"
                variant="outlined"
              />
               
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows="6"
                className={classes.textField}
                value={values.description}
                onChange={handleChange("description")}
                margin="normal"
                variant="outlined"
              />
              <button onClick={handleFormSubmit}className="submitEvent ">Submit</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

