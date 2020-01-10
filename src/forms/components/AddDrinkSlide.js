import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FormPropsTextFields from '../FormDrink';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class AlertDialogSlide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => this.setState({
        open: false,

    })

    render() {
        return (
            <div>
                <Dialog 
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Dodaj drinka"}</DialogTitle>
                    <DialogContent>
                        <FormPropsTextFields />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                        onClick={this.handleClose} 
                        color="secondary" href="/">
                            ZAPISZ
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
