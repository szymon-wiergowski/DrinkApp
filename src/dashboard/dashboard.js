import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BarChartHasBackground from "./components/BarChartHasBackground";
import TwoLevelPieChart from "./components/TwoLevelPieChart";
import CustomContentTreemap from "./components/CustomContentTreemap";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#FF0266" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ flexFlow: "row wrap", alignItems: "center" }}
        >
          <DashboardIcon
            color="secondary"
            style={{ fontSize: 20, marginRight: "5px" }}
          />
          <Typography
            color="textSecondary"
            style={{ marginRight: "auto", fontSize: 14 }}
          >
            DASHBOARD
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <BarChartHasBackground />
          <TwoLevelPieChart />
          <CustomContentTreemap />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
