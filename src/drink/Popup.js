import React, {Component, Fragment } from 'react';
import {Dialog, Button} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export default class extends Component{
    state={
        open:false,
    }

    handleToggle=()=>
    this.setState({
        open: !this.state.open
    })
    render(){
        const {open} = this.state
        return<Fragment>
        <Button variant="outlined" color="primary" onClick={this.handleToggle}>Więcej
      </Button> <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
      <DialogTitle id="customized-dialog-title">
          Nazwa {this.props.name}
        </DialogTitle>
                <DialogContent>
                <DialogTitle id="customized-dialog-title">
                Składniki
                </DialogTitle>

                  <DialogContentText>
                  To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. 
                  </DialogContentText>
                  <DialogTitle id="customized-dialog-title">
                Sposób przygotowania
                </DialogTitle>

                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. 
                  </DialogContentText>

                  <DialogTitle id="customized-dialog-title">
                 Zawartość alkoholu           </DialogTitle>

                  <DialogContentText>
                  To subscribe to this website, please enter your email address here. We will send updates
                    occasionally. 
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
