import React from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function FormDrink(props) {
  const { valueSearchField, onChangeText } = props;

  return (
    <div>
      <FormControl  color="secondary">
        <InputLabel>
          <em>Rodzaj</em>
        </InputLabel>
        <Select value={valueSearchField} onChange={onChangeText}>
          <MenuItem value="Gdynia">Gdynia</MenuItem>
          <MenuItem value="Gdańsk">Gdańsk</MenuItem>
          <MenuItem value="Gdańsk">Gdańsk</MenuItem>
          <MenuItem value="Pruszcz_Gdański">Pruszcz Gdański</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
