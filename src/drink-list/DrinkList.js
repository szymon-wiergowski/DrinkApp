import React from 'react';
import { FloatingActionButtons } from '../forms/components/AddDrinkButton'
import Drink from '../drink/Drink';
import SearchPanel from '../drink-filter-components/SearchPanel';
import { getDrinks, getIngredients } from '../DataFetch/DataFetch';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CommunicationPhonelinkErase } from 'material-ui/svg-icons';

export class DrinkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alko: 'all',
      drinks: [],
      ingredients: [],
      isLoading: true,
      hasError: false,
      error: '',
      search: '',
      sortBy: 'name',
      sortOrder: 'asc',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAlkoChange = this.handleAlkoChange.bind(this);
  }

  componentDidMount() {
    this.fetchDatas()
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const searchChanged = prevState.search !== this.state.search;
    if (searchChanged && !this.state.isLoading) {
      this.fetchDatas();
    }
  }

  fetchDatas() {
    Promise.all([
      getDrinks(),
      getIngredients(),
    ]).then(data => {
      const filteredDrinks = data[0]
        .filter(
          drink => {
            if (this.state.alko = 'all') {
              return true;
            }
            return drink.alko === this.state.alko;
          },
      )
      .filter(
        drink => {
          const drinkName = drink.name.toLowerCase();
          return (
            drinkName.includes(this.state.search)
          );
        },
      );
    const sortedDrinks =
      filteredDrinks.sort((a, b) => {
        const dA = a[this.state.sortBy];
        const dB = b[this.state.sortBy];
        if (typeof dA === 'string') {
          return dA.localeCompare(dB);
        } else {
          return dA - dB;
        }
      });
    if (this.state.sortOrder === 'desc') {
      sortedDrinks.reverse();
    };
    const sortedIngredients = data[1].ingredients.sort((a, b) => {
      const iA = a[this.state.sortBy];
      const iB = b[this.state.sortBy];
      if (typeof iA === 'string') {
        return iA.localeCompare(iB);
      } else {
        return iA - iB;
      }
    });
    if (this.state.sortOrder === 'desc') {
      sortedIngredients.reverse();
    }
    this.setState({
      drinks: sortedDrinks,
      ingredients: sortedIngredients,
      isLoading: false,
    });
  })
      .catch(error => {
    this.setState({
      hasError: true,
      error: error.toString(),
    })
      })
  };

handleSearchChange(e) {
  this.setState({
    search: e.target.value.toLowerCase(),
  });
}

handleAlkoChange(e) {
  this.setState({
    alko: e.target.value,
  })
  console.log('radio', this.state.alko)
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
          valueSearchField={this.state.search}
          onChangeText={this.handleSearchChange}
          ingredients={this.state.ingredients}
          valueAlko={this.state.alko}
          onChangeAlko={this.state.handleAlkoChange}
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
