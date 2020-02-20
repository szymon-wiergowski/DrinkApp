import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export class IngredientsSearchMulitpleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.checkIngredients = this.checkIngredients.bind(this);
  }

  checkIngredients(e, value) {
    this.props.onChangeIngredients(e,value);
  }
  
  render() {
    const ingredients = this.props.ingredients;

    return (
      <Autocomplete
        multiple={true}
        onChange={(e, value) => this.checkIngredients(e, value)}
        options={ingredients}
        disableCloseOnSelect
        filterSelectedOptions
        getOptionLabel={option => option.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField
            {...params}
            label="Składniki"
            color="secondary"
            fullWidth
          />
        )}
      />
    );
  }


}