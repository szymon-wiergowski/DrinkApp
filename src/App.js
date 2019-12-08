import React from 'react';
import Drink from './Drink/Drink';


function App() {
  return (
    <div >
      <Drinks />
      DrinkApp
    </div>
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

      </div>
    )
  }
}

export default App;
