import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import IngredientsFromData from "./IngredientsFromData";
import CircularProgress from "@material-ui/core/CircularProgress";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default class IngrediensList extends React.Component {
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
      }
    );
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.error}</div>;
    } else if (this.state.ingredients === 0) {
      return <CircularProgress color="secondary" />;
    }

    const ingredientsElements = Object.keys(this.state.ingredients).map(
      i => this.state.ingredients[i]
    )[0];


      return (
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={ingredientsElements}
          disableCloseOnSelect
          getOptionLabel={option => option.name}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </React.Fragment>
          )}
          style={{ width: 250 }}
          renderInput={params => (
            <TextField
              {...params}
              required
              variant="outlined"
              label="Składniki"
              color="secondary"
              fullWidth
            />
          )}
        />
      );
    }
  }

