import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function SearchPanel(props) {
  const { onChangeIngredients } = props;


  const checkIngredients = (e, value) => {
    onChangeIngredients(e,value);
  }

  return (
    <div>
      <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <ShoppingCartOutlinedIcon />
        </Grid>
        <Grid item>
          <TextField value={props.valueSearchField} onChange={props.onChangeText} id="input-with-icon-grid" color="secondary" label={<em>Sklep:</em>} />
        </Grid>
      </Grid>
    </div>

      <div>
      <Autocomplete
        multiple={true}
        onChange={(e, value) => checkIngredients(e, value)}
        disableCloseOnSelect
        filterSelectedOptions
        getOptionLabel={option => option.name}
        style={{ width: 400 }}
        renderInput={params => (
          <TextField
            {...params}
            label="miasto"
            color="secondary"
            fullWidth
          />
        )}
      />
      </div>
    </div>
  );
}
