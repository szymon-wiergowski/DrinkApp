import React from "react";
import GetIngredients from "./ingredientsFromData";
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
          GetIngredients()
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


    console.log("Arrayingr: ", ingredientsElements);
    console.log("top100Films: ", top100Films);

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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 }
];
