import React from 'react';
import { FloatingActionButtons } from '../forms/components/AddDrinkButton'
import Drink from '../drink/Drink';
import SearchPanel from '../drink-filter-components/SearchPanel';
import { getDrinks, getIngredients } from '../DataFetch/DataFetch';
import CircularProgress from '@material-ui/core/CircularProgress';

export class DrinkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      ingredients: [],
      isLoading: true,
      hasError: false,
      error: '',
      search: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.fetchDatas()
  };

  fetchDatas() {
    Promise.all([
      getDrinks(),
      getIngredients(),
    ]).then(data => {
      this.setState({
        drinks: data[0].drinks,
        ingredients: data[1].ingredients,
        isLoading: false,
      });
    })
      .catch(error => {
        this.setState({
          hasError: true,
          error: error.toString(),
        })
      })
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
    console.log(e.target.value.toLowerCase())
  }

  render() {
    if (this.state.isLoading) {
      return <CircularProgress color="secondary" />
    }

    if (this.state.hasError) {
      return <div>Bład: {this.state.error}</div>;
    }

    return (
      <div>
        <div>
          <SearchPanel
            value={this.state.search}
            onChangeText={this.handleSearchChange}
          />
        </div>
        <div>
          {this.state.drinks.map(drink =>
            <Drink
              key={drink.id}
              name={drink.name}
              /* recipe={drink.recipe} */
              ingredients={drink.ingredients}
              power={drink.power}
              ingredients_name={drink.ingredients_name}
              img_url={drink.img_url}
            />)}
        </div>
        <FloatingActionButtons />
      </div>
    )
  }
}
