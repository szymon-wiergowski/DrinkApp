import React from "react";
import IngredientsFromData from "./IngredientsFromData";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class AutocompleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      isLoading: false,
      hasError: false,
      error: ""
    };
  }
  componentDidMount() {
    this.fetchIngredients();
  }

  fetchIngredients() {
    this.setState(
      {
        isLoading: true,
        hasError: false,
        error: ""
      },
      () => {
        setTimeout(() => {
          IngredientsFromData()
            .then(data => {
              this.setState({
                ingredients: data,
                isLoading: false
              });
            })
            .catch(error => {
              this.setState({
                hasError: true,
                error: error.toString()
              });
            });
        }, 1);
      }
    );
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.error}</div>;
    }

    const ingredientsElements = Object.keys(this.state.ingredients).map(
      i => this.state.ingredients[i]
    )[0];

    return (
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        options={ingredientsElements}
        getOptionLabel={option => option.name}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option.name}
              {...getTagProps({ index })}
              disabled={index === 0}
            />
          ))
        }
        style={{ width: 500 }}
        renderInput={params => (
          <TextField
            {...params}
            required
            label="Składniki"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        )}
      />
    );
  }
}
