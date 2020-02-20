import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Card, Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwitchButtons from './SwitchButtons';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        "& > * ": {
            margin: theme.spacing(1),
            width: 300,
        }
    },
}));

const LoginForm = (props) => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:740px)');
    const { registerButtonToggle, loginButtonToggle, handelChangePanel } = props

    if (matches === true) {
        return (
            <Card style={{ padding: '20px', margin: '100px', minWidth: '500px' }}>
                <SwitchButtons registerButtonToggle={registerButtonToggle} loginButtonToggle={loginButtonToggle} handelChangePanel={handelChangePanel} />
                <form onSubmit={props.login} className={classes.root} noValidate autoComplete="on">
                    <TextField
                        required
                        label="Adres email"
                        value={props.value}
                        onChange={props.handleChange}
                        name="email"
                        type="email"
                        defaultValue=""
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        required
                        value={props.value}
                        onChange={props.handleChange}
                        label="Hasło"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        color="secondary"
                    />
                    <span style={{ color: 'red' }}>{props.error === '' ? null : props.error}</span>
                    <Button type="submit" variant="contained" color="secondary">Zaloguj się!</Button>
                    <Link
                        color="secondary"
                        component="button"
                        href="#"
                        onClick={() => {
                            alert('Moduł w trakcie budowy.');
                        }}
                        variant="body2">
                        {'Nie pamiętasz hasła?'}
                    </Link>
                </form>
            </Card>
        )
    } else {
        return (
            <Container style={{ paddingTop: '30px' }} >
                <SwitchButtons registerButtonToggle={registerButtonToggle} loginButtonToggle={loginButtonToggle} handelChangePanel={handelChangePanel} />
                <form onSubmit={props.login} className={classes.root} noValidate autoComplete="on">
                    <TextField
                        required
                        label="Adres email"
                        value={props.value}
                        onChange={props.handleChange}
                        name="email"
                        type="email"
                        defaultValue=""
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        required
                        value={props.value}
                        onChange={props.handleChange}
                        label="Hasło"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        color="secondary"
                    />
                    <span style={{ color: 'red' }}>{props.error === '' ? null : props.error}</span>
                    <Button type="submit" variant="contained" color="secondary">Zaloguj się!</Button>
                    <Link
                        color="secondary"
                        component="button"
                        href="#"
                        onClick={() => {
                            alert('Moduł w trakcie budowy.');
                        }}
                        variant="body2">
                        {'Nie pamiętasz hasła?'}
                    </Link>
                </form>
            </Container>
        )
    }
}

export default LoginForm;