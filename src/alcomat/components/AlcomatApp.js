import React from 'react';
import {
    CardHeader,
    Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

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
const AlcomatApp = (props) => {
    const { userData, favoriteDrinks, logout, hendleDeleteFavoriteDrink } = props
    const classes = useStyles();
    return (
        <>

            <form className={classes.root} noValidate autoComplete="on">
                <Typography
                    gutterBottom
                    variant="h5"
                    color="secondary"
                >{`Witaj, ${userData.firstname} ${userData.surname}!`}</Typography>
                <Typography
                    variant="h6"
                    color="secondary"
                >Dzięki temu algorytmowi możesz w prosty sposób sprawdzić czy ciągle jesteś pijany!</Typography>
                <TextField
                    disabled
                    value={`Wiek: ${userData.age} lat.`}
                    // onChange={handleChange}
                    name="email"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    disabled
                    value={`Waga: ${userData.weight} kg.`}
                    // onChange={handleChange}
                    name="email"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    disabled
                    value={`Wzrost: ${userData.height} cm.`}
                    // onChange={handleChange}
                    name="email"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <Button
                    onClick={logout}
                    variant="contained"
                    color="secondary">Oblicz promile!
                </Button>
            </form>
        </>
    )
}

export default AlcomatApp;