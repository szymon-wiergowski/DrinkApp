import React, {Component, Fragment } from 'react';
import {Dialog, Button} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class Popup extends React.Component{
    state={
        open:false,
    }

    handleToggle=()=>
    this.setState({
        open: !this.state.open
    })
    render(){
      const {open} = this.state

            return <Fragment>
           <Button variant="outlined" color="primary" onClick={this.handleToggle}>Więcej
      </Button> <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
      <DialogTitle id="customized-dialog-title">
           Nazwa: {this.props.name}
        </DialogTitle>
                <DialogContent>
                <DialogTitle id="customized-dialog-title">
                Składniki: 
                </DialogTitle>

                  <DialogContentText>
                  {this.props.ingredients_name}
                  </DialogContentText>
                  <DialogTitle id="customized-dialog-title">
                Sposób przygotowania:
                </DialogTitle>

                  <DialogContentText>
                  {this.props.description} {this.props.recipe} 
                  </DialogContentText>

                  <DialogTitle id="customized-dialog-title">
                 Zawartość alkoholu:      </DialogTitle>

                  <DialogContentText>
                  {this.props.power}   
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button color="primary">
                    Skopiuj
                  </Button>
                  <Button color="primary">
                    Dodaj do ulubionych
                  </Button>
                </DialogActions>
              </Dialog>
     </Fragment>
    }
}

export default Popup;