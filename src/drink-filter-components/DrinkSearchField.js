import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LocalBarRoundedIcon from '@material-ui/icons/LocalBarRounded';

export function DrinkSearchField(props) {

  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <LocalBarRoundedIcon />
        </Grid>
        <Grid item>
          <TextField value={props.valueSearchField} onChange={props.onChangeText} id="input-with-icon-grid" color="secondary" label={<em>Drink:</em>} />
        </Grid>
      </Grid>
    </div>
  );
}