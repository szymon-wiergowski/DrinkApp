import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function AlkoSearch(props) {
  const classes = useStyles();

  const { valueAlko, onChangeAlko } = props;

  return (
    <div>
      <FormControl className={classes.formControl} color="secondary">
        <InputLabel>
          <em>Rodzaj</em>
        </InputLabel>
        <Select value={valueAlko} onChange={onChangeAlko}>
          <MenuItem value="all">Wszystkie</MenuItem>
          <MenuItem value={true}>Z alkoholem</MenuItem>
          <MenuItem value={false}>Bez alkoholu</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
