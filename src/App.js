import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Drink from './Drink/Drink';
import { Navbar } from './navigation/Navigation';
import { Shops } from './shop-list/ShopList';
import FormPropsTextFields from './forms/FormDrink'
import AlertDialogSlide from './forms/components/AddDrinkSlide'
import FloatingActionButtons from './forms/components/AddDrinkButton'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/shops"
          component={Shops}
        />
        <Route
          path="/addDrink"
          component={AlertDialogSlide}
        />
        <Route
          path="/map"

        />
        <Route
          path="/alco"

        />
        <Route
          path="/"
          component={Drinks}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

class Drinks extends React.Component {

  state = {
    drinks: [],
    ingredients: []
  }



  componentDidMount() {
    fetch("./drinks.json").then(r => r.json()).then(data => {
      this.setState({
        drinks: data.drinks
      })
    })
    fetch("./ingredients.json").then(r => r.json()).then(data => {
      console.log('data.ingredients:', data);
      this.setState({
        ingredients: data.ingredients


      })
    })
  }

  render() {
    return (
      <div>
        Drinks List
        <div>

          {
            this.state.drinks.map(drink => <Drink key={drink.id} name={drink.name} recipe={drink.recipe} />)
          }
        </div>
        <FloatingActionButtons />
      </div>
    )
  }
}

export default App;
