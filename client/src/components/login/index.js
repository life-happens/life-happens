import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Examples from "../examples";
import Register from "../Register";



const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
    
  },
  
  paper: {
    margin: theme.spacing(8, 4, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "8%",
     
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main

  }
  
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <Examples />
        </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
    
         <Register />

        </div>
      </Grid>
    </Grid>
  );
}
