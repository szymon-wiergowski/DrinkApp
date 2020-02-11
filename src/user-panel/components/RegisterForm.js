import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
    const { checkedRules, error, value, handleChange, hendleCheckbox, signUp } = props
    const classes = useStyles();
    return (
        <>
            <form onSubmit={signUp} className={classes.root} noValidate autoComplete="on">
                <TextField
                    required
                    label="Adres email"
                    value={value}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    label="Hasło"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    type="text"
                    name="firstname"
                    label="Imię"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    type="text"
                    name="surname"
                    label="Nazwisko"
                    variant="outlined"
                    color="secondary"
                />
                <RadioGroup name="gender" value={value} onChange={handleChange}>
                    <FormControlLabel value="Kobieta" control={<Radio />} label="Kobieta" />
                    <FormControlLabel value="Mężczyzna" control={<Radio />} label="Mężczyzna" />
                </RadioGroup>
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    type="number"
                    name="weight"
                    label="Waga"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    type="number"
                    name="height"
                    label="Wzrost"
                    InputProps={{
                        endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={value}
                    onChange={handleChange}
                    type="number"
                    name="age"
                    label="Wiek"
                    InputProps={{
                        endAdornment: <InputAdornment position="start">lat</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <FormControlLabel
                    control={
                        <Checkbox onChange={hendleCheckbox} type="checkbox" checked={checkedRules ? "checked" : null} />
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
                        alert('Regulamin w przygotowaniu');
                    }}
                >
                    Przejdź do regulaminu.
                </Link>
                <span style={{ color: 'red' }}>{error === '' ? null : error}</span>
                <Button type="submit" variant="contained" color="secondary">Zarejestruj się!</Button>
            </form>
        </>
    )
}
export default RegisterForm;