import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles(theme => ({
    groupButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },

}));

const SwitchButtons = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.groupButtons} >
            <ButtonGroup color="secondary" aria-label="secondary button group">
                <Button onClick={() => props.handelChangePanel(false, "contained", "outlined")} variant={props.loginButtonToggle} >Zaloguj się</Button>
                <Button onClick={() => props.handelChangePanel(true, "outlined", "contained")} variant={props.registerButtonToggle} >Zarejestruj się</Button>
            </ButtonGroup>
        </div>
    )
}

export default SwitchButtons;