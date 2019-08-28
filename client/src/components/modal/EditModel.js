import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Create";
import "./style.css";
// import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  }
}));

export default function EditModal(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    eventName: props.name,
    date: props.date,
    time: props.time,
    location: props.location,
    address: props.address,
    description: props.description,
    inspirationalPhoto: [],
    discDate: props.discDate,
    percentOff: props.discDate,
    ticketPrice: props.ticketPrice,
    ticketTitle: props.ticketTitle,
    ticketDescription: props.ticketDescription
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
    console.log( values);

    // axios.put('/api/users/update/' + props.id, {
    //   name: values.eventName,
    //   date: values.date,
    //   time: values.time,
    //   location: values.location,
    //   address: values.address,
    //   description: values.description,
    //   inspirationalPhoto: [values.inspirationalPhoto1, values.inspirationalPhoto2],
    //   ticketPrice: values.ticketPrice,
    //   ticketTitle: values.ticketTitle,
    //   ticketDescription: values.ticketDescription
    // }, {headers: {'Accept': 'application/json'}})
    // .then(function (response){
    //   console.log(response);
      

    // })
    // .catch(function (error){
    //   console.log(error);
    // });
    
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
        <EditIcon 
        type="button" 
        onClick={handleOpen}
        />
      </div>
      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modalBackground">
        <button onClick={handleClose} className="closeButton">X</button>
          <form className={classes.container} noValidate autoComplete="off">
            <div>
              <h2 id="header">Edit Event</h2>
            </div>
            <div>
              <TextField
                id="outlined-with-placeholder"
                label="Event Name"
                placeholder={props.name}
                className={classes.textField}
                value={values.eventName}
                onChange={handleChange("eventName")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Date"
                placeholder={props.date}
                className={classes.textField}
                value={values.date}
                onChange={handleChange("date")}
                margin="normal"
                variant="outlined"
              />
               <TextField
                id="outlined-name"
                label="Time"
                placeholder={props.time}
                className={classes.textField}
                value={values.time}
                onChange={handleChange("time")}
                margin="normal"
                variant="outlined"
              />
                <TextField
                id="outlined-name"
                label="Location Name"
                placeholder={props.location}
                className={classes.textField}
                value={values.location}
                onChange={handleChange("location")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Location Address"
                placeholder={props.address}
                className={classes.textField}
                value={values.address}
                onChange={handleChange("address")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Ticket Title"
                placeholder={props.ticketTitle}
                className={classes.textField}
                value={values.ticketTitle}
                onChange={handleChange("ticketTitle")}
                margin="normal"
                variant="outlined"
              />
               <TextField
                id="outlined-name"
                label="Ticket Price"
                placeholder={props.ticketPrice}
                className={classes.textField}
                value={values.ticketPrice}
                onChange={handleChange("ticketPrice")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Ticket Description (optional)"
                placeholder={props.ticketDescription}
                className={classes.textField}
                value={values.ticketDescription}
                onChange={handleChange("ticketDescription")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Date for Early Purchase Discount Cutoff (optional)"
                placeholder={props.discDate}
                className={classes.textField}
                value={values.discDate}
                onChange={handleChange("discDate")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Discount Percentage for Early Purchase (optional)"
                placeholder={props.percentOff}
                className={classes.textField}
                value={values.percentOff}
                onChange={handleChange("percentOff")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Image URL"
                placeholder={props.image2[0]}
                className={classes.textField}
                value={values.inspirationalPhoto1}
                onChange={handleChange("inspirationalPhoto1")}
                margin="normal"
                variant="outlined"
              />
                 <TextField
                id="outlined-name"
                label="Image URL"
                placeholder={props.image1[0]}
                className={classes.textField}
                value={values.inspirationalPhoto2}
                onChange={handleChange("inspirationalPhoto2")}
                margin="normal"
                variant="outlined"
              />
               
              <TextField
                id="outlined-multiline-static"
                label="Description"
                placeholder={props.description}
                multiline
                rows="6"
                className={classes.textField}
                value={values.description}
                onChange={handleChange("description")}
                margin="normal"
                variant="outlined"
              />
              <button onClick={handleFormSubmit}className="submitEvent ">Save Changes</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

