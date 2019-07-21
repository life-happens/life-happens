import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./style.css";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  dense: {
    marginTop: 25
  },
  menu: {
    width: 250
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    eventName: "",
    date: "",
    location: "",
    description: "",
    inspirationalImages: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper">
      <div>
        <button type="button" onClick={handleOpen}>
          Add Event
        </button>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modalBackground">
          <form className={classes.container} noValidate autoComplete="off">
            <div>
              <h2 id="header">Create Event</h2>
            </div>
            <div>
              <TextField
                id="outlined-name"
                label=" Event Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange("name")}
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
                label="Location"
                className={classes.textField}
                value={values.location}
                onChange={handleChange("location")}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Inspirational Images"
                className={classes.textField}
                value={values.inspirationalImages}
                onChange={handleChange("inspirationalImages")}
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
            </div>
          </form>

          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}
