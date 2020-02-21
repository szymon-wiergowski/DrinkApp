import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function AddDrinkButton(props) {
  const classes = useStyles();
  const { handleToggleForm } = props;

  return (
    <div className="adddrink__button">
      <div className={classes.root}>
        <Fab
          onClick={handleToggleForm}
          variant="extended"
          color="secondary"
          aria-label="add"
        >
          <AddIcon fontSize="small" />
          Dodaj drinka
        </Fab>
      </div>
    </div>
  );
}
