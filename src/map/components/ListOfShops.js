import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Shop from "./Shop";

import "../../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function FolderList(props) {
  const classes = useStyles();

  const { shops, onCheck } = props;

  return (
    <List className={classes.root}>
      <h1 className="shop__header">NASZE SKLEPY</h1>
      {shops.map(shop => {
        return (
          <div key={shop.id} className="googleMaps__items">
            <Shop id={shop.id} shop={shop} onCheck={onCheck} />
          </div>
        );
      })}
    </List>
  );
}
