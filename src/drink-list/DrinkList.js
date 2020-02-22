import React from "react";
import Drink from "../drink/Drink";
import SearchPanel from "../drink-filter-components/SearchPanel";
import { getDrinks, getIngredients } from "../DataFetch/DataFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddDrinkButton from "./components/AddDrinkButton";
import AddDrinkSlide from "./components/AddDrinkSlide";

export class DrinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      ingredients: [],
      isLoading: true,
      hasError: false,
      error: "",
      search: "",
      searchIngredients: [],
      alko: "all",
      sortBy: "name",
      sortOrder: "asc",
      addDrinkSlideIsOpen: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAlkoChange = this.handleAlkoChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const alkoChanged = prevState.alko !== this.state.alko;
    const searchChanged = prevState.search !== this.state.search;
    const ingredientsChanged =
      prevState.searchIngredients !== this.state.searchIngredients;
    if (
      (searchChanged || alkoChanged || ingredientsChanged) &&
      !this.state.isLoading
    ) {
      this.fetchDatas();
    }
  }

  fetchDatas() {
    Promise.all([getDrinks(), getIngredients()])
      .then(data => {
        const filteredDrinks = data[0]
          .filter(drink => {
            if (this.state.alko === "all") {
              return true;
            }
            return drink.alko === this.state.alko;
          })
          .filter(drink => {
            if (this.state.searchIngredients.length === 0) {
              return true;
            } else {
              return this.state.searchIngredients.every(ingredientId =>
                drink.ingredients.includes(parseInt(ingredientId))
              );
            }
          })
          .filter(drink => {
            const drinkName = drink.name.toLowerCase();
            return drinkName.includes(this.state.search);
          });
        const sortedDrinks = filteredDrinks.sort((a, b) => {
          const dA = a[this.state.sortBy];
          const dB = b[this.state.sortBy];
          if (typeof dA === "string") {
            return dA.localeCompare(dB);
          } else {
            return dA - dB;
          }
        });
        if (this.state.sortOrder === "desc") {
          sortedDrinks.reverse();
        }
        const sortedIngredients = data[1].sort((a, b) => {
          const iA = a[this.state.sortBy];
          const iB = b[this.state.sortBy];
          if (typeof iA === "string") {
            return iA.localeCompare(iB);
          } else {
            return iA - iB;
          }
        });
        if (this.state.sortOrder === "desc") {
          sortedIngredients.reverse();
        }
        this.setState({
          drinks: sortedDrinks,
          ingredients: sortedIngredients,
          isLoading: false
        });
      })
    .catch(err => {
      console.log(err)
      this.setState({
        hasError: true,
        error: err.toString()
      });
    });
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    });
  }

  handleAlkoChange(e) {
    this.setState({
      alko: e.target.value
    });
  }

  handleIngredientsChange(e, value) {
    this.setState({
      searchIngredients: value.map(el => el.id)
    });
  }

  handleToggle = () =>
    this.setState({
      open: !this.state.open
    });

  handleToggleForm = () =>
    this.setState({
      addDrinkSlideIsOpen: !this.state.addDrinkSlideIsOpen
    });

    componentWillUnmount(){
      if(!this.state.isLoading)
      this.fetchDatas()   
    }

  render() {
    const { open } = this.state;

    if (this.state.isLoading) {
      return <CircularProgress color="secondary" />;
    }

    if (this.state.hasError) {
      return <div>Bład: {this.state.error}</div>;
    }

    return (
      <div>
        <AddDrinkButton handleToggleForm={this.handleToggleForm} />
        {this.state.addDrinkSlideIsOpen && (
          <AddDrinkSlide
            handleToggleForm={this.handleToggleForm}
            fetchDatas={this.fetchDatas}
          />
        )}
        <SearchPanel
          valueSearchField={this.state.search}
          onChangeText={this.handleSearchChange}
          ingredients={this.state.ingredients}
          valueSearchIngredients={this.state.searchIngredients}
          onChangeIngredients={this.handleIngredientsChange}
          valueAlko={this.state.alko}
          onChangeAlko={this.handleAlkoChange}
        />
        {(!this.state.isLoading & this.state.drinks.length < 1)
          ? <h1 style={{ textAlign: 'center', color: 'red' }}>Brak wyników<br />Jeżeli nie znalazłeś drinka którego szukasz, możesz dodać go do naszej bazy :)</h1>
          : this.state.drinks.map(drink => (
            <Drink
              key={drink.id}
              name={drink.name}
              recipe={drink.recipe}
              ingredients={drink.ingredients}
              power={drink.power}
              ingredients_name={drink.ingredients_name}
              img_url={drink.img_url}
              origin={drink.origin}
            />
          ))
        }
      </div>
    );
  }
}
