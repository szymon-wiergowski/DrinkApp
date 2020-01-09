import React from "react";
import { getIngredients } from "./ingredientsFromData";

export default class IngredientsList extends React.Component {
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
          getIngredients()
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
        }, 1000);
      }
    );
  }
  render(){
      if(this.state.hasError){
          return(
          <div>Error: {this.state.error}</div>
          );
      }
      
  }
}
