import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function AlkoSearch(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl} color='secondary'>
        <InputLabel><em>Rodzaj</em></InputLabel>
        <Select
          value={props.valueAlko}
          onChange={props.onChangeAlko}
        >
          <MenuItem value='all'>Wszystkie</MenuItem>
          <MenuItem value={true}>Alkoholowe</MenuItem>
          <MenuItem value={false}>Bezalkoholowe</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}
