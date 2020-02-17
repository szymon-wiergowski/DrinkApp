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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class AddDrinkSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      ingredient_name: '',
      power: '',
      origin: '',
      recipe: '',
      alko: undefined,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { handleToggleForm } = this.props;
    const { name } = this.state;
    
    return (
      <div>
        <Dialog
          open={handleToggleForm}
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
              onChangeName={this.handleChangeName}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleForm} color="secondary">
              ZAPISZ
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
