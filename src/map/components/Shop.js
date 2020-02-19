import React from "react";

import "../../App.css";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  margin: {
    margin: theme.spacing(1)
  },
  rounded: {
    color: "#fff"
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default props => {
  const classes = useStyles();

  const { shop, onCheck, id } = props;
  const firstLetterOfShop = shop.name.charAt(0);

  const handleOnClick = id => {
    onCheck(id);
  };

  return (
    <div key={shop.id} className="googleMaps__item">
      <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              className={classes.pink}
              variant="rounded"
              src="/static/images/avatar/2.jpg"
              alt={firstLetterOfShop}
            />
          </ListItemAvatar>
          <ListItemText
            primary={shop.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {shop.localization}
                </Typography>
                {` – Otwarte: ${shop.openHours} / ${
                  shop.alko === true ? " Alkoholowy" : " Bezalkoholowy"
                }`}
              </React.Fragment>
            }
          />
        </ListItem>
      </div>
      <div className="googleMaps__button">
        <Button color="default" onClick={() => handleOnClick(id)}>
          POKAŻ NA MAPIE
        </Button>
      </div>
    </div>
  );
};

// {}
