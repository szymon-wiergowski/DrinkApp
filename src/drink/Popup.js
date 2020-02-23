import React, { Fragment } from "react";
import { Dialog, Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Popup extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        {/* <Fab color="secondary" aria-label="edit" onClick={this.handleToggle}>
        <EditIcon />
        <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
          <DialogTitle id="customized-dialog-title" style={{ color: "#f50057" }}><img src={(this.props.img_url) ? this.props.img_url : './img/newDrink.jpg'} alt={""} className="popup_img" width="200px" height="200px"></img>
            Nazwa:
                  </DialogTitle>
          <DialogTitle id="customized-dialog-title">
            {this.props.name}
          </DialogTitle>
          <DialogTitle id="customized-dialog-title" style={{ color: "#f50057" }}>
            Składniki:
                  </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.ingredients_name}
          </DialogContentText>
          <DialogTitle id="customized-dialog-title" style={{ color: "#f50057" }}>
            Sposób przygotowania:
                  </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.description} {this.props.recipe}
          </DialogContentText>
          <DialogActions>
            <Button color="primary">
              Skopiuj
                    </Button>
            <Button color="primary">
              Dodaj do ulubionych
                    </Button>
          </DialogActions>
        </Dialog>
      </Fab> */}
        <Button
          variant="outlined"
          className="buttonPopup"
          color="primary"
          onClick={this.handleToggle}
        >
          Więcej
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="customized-dialog-title"
            style={{ color: "#f50057" }}
          >
            <img
              src={
                this.props.img_url ? this.props.img_url : "./img/newDrink.jpg"
              }
              alt={""}
              className="popup_img"
              width="200px"
              height="200px"
            ></img>
            Nazwa:
          </DialogTitle>
          <DialogTitle id="customized-dialog-title">
            {this.props.name}
          </DialogTitle>
          <DialogTitle
            id="customized-dialog-title"
            style={{ color: "#f50057" }}
          >
            Pochodzenie:
          </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.origin}
          </DialogContentText>
          <DialogTitle
            id="customized-dialog-title"
            style={{ color: "#f50057" }}
          >
            Składniki:
          </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.ingredients_name}
          </DialogContentText>
          <DialogTitle
            id="customized-dialog-title"
            style={{ color: "#f50057" }}
          >
            Sposób przygotowania:
          </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.description} {this.props.recipe}
          </DialogContentText>
          <DialogTitle
            id="customized-dialog-title"
            style={{ color: "#f50057" }}
          >
            Zawartość alkoholu:{" "}
          </DialogTitle>
          <DialogContentText style={{ margin: "20px" }}>
            {this.props.power}
          </DialogContentText>
          {/* <DialogActions>
          <Button color="primary">
            Skopiuj
                  </Button>
          <Button color="primary">
            Dodaj do ulubionych
                  </Button>
        </DialogActions> */}
        </Dialog>
      </Fragment>
    );
  }
}
export default Popup;
