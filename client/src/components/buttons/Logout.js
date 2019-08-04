import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#204969",
    color: "white",
    borderColor: "white",
    borderRadius: 0
    
  },
  input: {
    display: 'none',
  },
  root: {
      display: 'flex',
      background: "white",
      justifyContent: 'flex-end'
  }
 
}));



export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={props.onClick} className={classes.button}  href="/">
        LogOut
      </Button>
   
    </div>
  );
}