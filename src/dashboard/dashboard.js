import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadialChart from "./components/RadialChart";
import TwoLevelPieChart from "./components/TwoLevelPieChart";
import CustomContentTreemap from "./components/CustomContentTreemap";

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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ flexFlow: "row wrap" }}
        >
          <Typography className={classes.heading}>DASHBOARD</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{
            flexFlow: "row wrap",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <RadialChart />
          <TwoLevelPieChart />
          <CustomContentTreemap />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
