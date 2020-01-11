import React from 'react';
import { DrinkSearchField } from '../drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from '../drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearchRadio } from '../drink-filter-components/AlkoSearchRadio';
import { FloatingActionButtons } from '../forms/components/AddDrinkButton'
import Grid from '@material-ui/core/Grid';
import Drink from '../drink/Drink';


export class DrinkList extends React.Component {

    state = {
      drinks: [],
      ingredients: []
    }
  
  
  
    componentDidMount() {
      fetch("./data/drinks.json").then(r => r.json()).then(data => {
        this.setState({
          drinks: data.drinks
        })
      })
      fetch("./data/ingredients.json").then(r => r.json()).then(data => {
        this.setState({
          ingredients: data.ingredients
  
  
        })
      })
    }
  
    render() {
      return (
        <div>
          <div>
            <Grid container spacing={5} justify="center" alignItems="center">
              <Grid item>
                <DrinkSearchField />
              </Grid>
              <Grid item>
                <IngredientsSearchMulitpleSelect />
              </Grid>
              <Grid item>
                <AlkoSearchRadio />
              </Grid>
            </Grid>
          </div>
          <div>
  
            {
              this.state.drinks.map(drink => <Drink key={drink.id} name={drink.name} /*recipe={drink.recipe}*/ ingredients={drink.ingredients} power={drink.power} ingredients_name={drink.ingredients_name} img_url={drink.img_url}
              />)     
              }</div>
          <FloatingActionButtons />
        </div>
      )
    }
  }
  