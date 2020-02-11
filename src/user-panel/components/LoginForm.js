import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

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
    return (
        <>
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
            </form>
        </>
    )
}
export default LoginForm;