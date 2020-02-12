import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocalBarRoundedIcon from "@material-ui/icons/LocalBarRounded";
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FontDownloadRoundedIcon from "@material-ui/icons/FontDownloadRounded";
import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "auto"
  },
  list: {
    width: 500
  },
  fullList: {
    width: "auto"
  }
});

export function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            icon={<HomeIcon />}
            label="drink app"
            component={Link}
            to="/"
          ></Tab>

          <Tab
            icon={<LocalBarRoundedIcon />}
            label="drinki"
            component={Link}
            to="/drinklist"
          ></Tab>
          <Tab
            icon={<FontDownloadRoundedIcon />}
            label="alkomat"
            component={Link}
            to="/alcomat"
          ></Tab>
          <Tab
            icon={<ExploreRoundedIcon />}
            label="mapa"
            component={Link}
            to="/map"
          ></Tab>
          <Tab
            icon={<AccountCircleRoundedIcon />}
            label="konto"
            component={Link}
            to="/UserPanel"
          ></Tab>
        </Tabs>
      </Paper>
    </AppBar>
  );
}
