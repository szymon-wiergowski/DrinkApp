import React from 'react';

import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import {
    Card,
} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "& > * ": {
            margin: theme.spacing(1),
            width: 300,
        }
    },
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
                <Button onClick={() => props.displayCardChange(false, "contained", "outlined")} variant={props.loginBtn} >Zaloguj się</Button>
                <Button onClick={() => props.displayCardChange(true, "outlined", "contained")} variant={props.regBtn} >Zarejestruj się</Button>
            </ButtonGroup>
        </div>
    )
}

const Login = (props) => {
    const classes = useStyles();
    return (
        <Card style={{ margin: "16px" }}>
            <form className={classes.root} noValidate autoComplete="on">
                <Typography>Nie jesteś zalogowany.</Typography>
                <TextField
                    required

                    label="Użytkownik"
                    defaultValue="Nazwisko"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Hasło"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    color="secondary"
                />
                <Button onClick={() => this.props.loginUser(2)} variant="contained" color="secondary">Zaloguj się!</Button>
            </form>
        </Card>
    )
}

const Register = () => {
    const classes = useStyles();
    return (
        <Card style={{ margin: "16px" }}>
            <form className={classes.root} noValidate autoComplete="on">
                <Typography>Nie masz jeszcze konta? Załóż je:</Typography>
                <TextField
                    required

                    label="Użytkownik"
                    defaultValue="Twój Login"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Imię"
                    defaultValue="Imię.."
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Nazwisko"
                    defaultValue="Nazwisko"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Waga"
                    defaultValue="Waga w kg"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Wzrost"
                    defaultValue="Wzrost w cm"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Wiek"
                    defaultValue="Ile masz lat?"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Hasło"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required

                    label="Powtórz hasło"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    color="secondary"
                />
                <Button onClick={() => this.props.loginUser(2)} variant="contained" color="secondary">Zarejestrój się</Button>
            </form>
        </Card>
    )
}

class LoginPanel extends React.Component {
    state = {
        displayCard: false,
        loginButtonToggle: "contained",
        registerButtonToggle: "",
    }

    hendelChangePanel = (card, loginBtn, regBtn) => {
        this.setState({
            displayCard: card,
            loginButtonToggle: loginBtn,
            registerButtonToggle: regBtn,
        })
    }

    render() {
        if (this.state.displayCard === false) {
            return (
                <>
                    <Fab
                        onClick={() => this.props.onToggle('right', false)()}
                        size="small"
                        style={{
                            position: 'absolute',
                            top: "5px",
                            right: "5px"
                        }}
                        color="secondary" aria-label="close">
                        <CloseIcon />
                    </Fab>
                    <SwitchButtons regBtn={this.state.registerButtonToggle} loginBtn={this.state.loginButtonToggle} displayCardChange={this.hendelChangePanel.bind(this)} />
                    <Login />
                </>
            )
        } else {
            return (
                <>
                    <Fab
                        onClick={() => this.props.onToggle('right', false)()}
                        size="small"
                        style={{
                            position: 'absolute',
                            top: "5px",
                            right: "5px"
                        }}
                        color="secondary" aria-label="close">
                        <CloseIcon />
                    </Fab>
                    <SwitchButtons regBtn={this.state.registerButtonToggle} loginBtn={this.state.loginButtonToggle} displayCardChange={this.hendelChangePanel.bind(this)} />
                    <Register />
                </>
            )
        }
    }
}

export default LoginPanel;