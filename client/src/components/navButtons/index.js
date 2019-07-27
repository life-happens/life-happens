import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function NavButtons() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Button size="medium" className={classes.margin}>
          How it Works
        </Button>
        <Button size="medium" className={classes.margin}>
          Ours Services
        </Button>
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Log in or Register
        </Button>
      </div>
    </div>
  );
}
