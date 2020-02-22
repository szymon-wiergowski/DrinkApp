import React from "react";

import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import FormDrink from "./FormDrink";
import "./../../App.css";
import { BASE_URL } from '../../DataFetch/DataFetch';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class AddDrinkSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      ingredients_name: '',
      power: '',
      origin: '',
      recipe: '',
      alko: undefined,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleAlko = this.handleAlko.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChangeIngredients(e, value) {
    this.setState({
      ingredients: value.map(el => el.id),
    })
    this.setState({
      ingredients_name: value.map(el => el.name).join(', ')
    })
  }

  handleAlko(e) {
    this.setState({
      power: e.target.value
    })
    this.setState({
      alko: (e.target.value === "<0,5%") ? false : true
    })
  }

  handleButtonClick() {
    fetch(`${BASE_URL}/drinks.json`, {
      method: 'POST',
      body: JSON.stringify({ ...this.state })
    })
      .then(() => {
        this.props.handleToggleForm();
        // this.props.fetchDatas();
      })
  }

  render() {
    const { handleToggleForm } = this.props;
    const { name, ingredients, recipe, origin, power } = this.state;
    console.log(this.state)
    return (
      <div>
        <Dialog
          open={true}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
        >
          <Fab
            onClick={handleToggleForm}
            size="small"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px"
            }}
            color="secondary"
            aria-label="close"
          >
            <CloseIcon />
          </Fab>
          <DialogTitle aria-labelledby="simple-dialog-title">
            {"DODAJ DRINKA"}
          </DialogTitle>
          <DialogContent>
            <FormDrink
              name={name}
              onChangeData={this.handleOnChange}
              ingredients={ingredients}
              onChangeIngredients={this.handleChangeIngredients}
              recipe={recipe}
              origin={origin}
              power={power}
              onChangeAlko={this.handleAlko}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleButtonClick} color="secondary" disabled={(name && ingredients && recipe && origin && power) ? false : true}>
              ZAPISZ
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
