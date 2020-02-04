import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

const RegisterForm = (props) => {

    const classes = useStyles();
    return (
        <>
            <form onSubmit={props.signUp} className={classes.root} noValidate autoComplete="on">
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
                <FormControlLabel
                    control={
                        <Checkbox value="checked" />
                    }
                    label="Zapoznałem się z regulaminem:*"
                />
                <Link
                    color="secondary"
                    component="button"
                    variant="body2"
                    type="checkbox"
                    name="checkbox"
                    onClick={() => {
                        console.log("I'm a button.");
                    }}
                >
                    Przejdź do regulaminu.
                </Link>
                <span style={{ color: 'red' }}>{props.error === '' ? null : props.error}</span>
                <Button type="submit" variant="contained" color="secondary">Zarejestruj się!</Button>
            </form>
        </>
    )
}
export default RegisterForm;