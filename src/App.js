import React from 'react';


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
    drinks: []
  }

  componentDidMount() {
    fetch("./drinks.json").then(r => r.json()).then(data => {
      this.setState({
        drinks: data.drinks
      })
    })
  }

  render() {
    return (
      <div>
        Drinks List
        {
  this.state.drinks.map(drink => <p key={drink.id}>{drink.name}</p>)
        }

      </div>
    )
  }
}

export default App;
