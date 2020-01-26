import React from "react";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import FormPropsTextFields from "./FormDrink";
import "./../../App.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default class AddDrinkSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () =>
    this.setState({
      open: false
    });

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
        >
          <Fab
            onClick={this.handleClose}
            size="small"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px"
            }}
            color="secondary"
            href="/"
            aria-label="close"
          >
            <CloseIcon />
          </Fab>
          <DialogTitle aria-labelledby="simple-dialog-title">
            {"DODAJ DRINKA"}
          </DialogTitle>
          <DialogContent>
            <FormPropsTextFields />
          </DialogContent>
          <DialogActions >
            <Button onClick={this.handleClose} color="secondary" href="/">
              ZAPISZ
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
