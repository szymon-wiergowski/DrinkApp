import React from 'react';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
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
                >Dzięki temu algorytmowi możesz w przybliżeniu określić zawartość alkoholu we krwi.</Typography>
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
                <TextField
                    disabled
                    value={`Płeć: ${userData.gender}`}
                    // onChange={handleChange}
                    name="gender"
                    type="gender"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    label="Ile wypiłeś wódki?"
                    // onChange={handleChange}
                    name="vodka"
                    type="number"
                    defaultValue=""
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ml 40 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    label="Ile wypiłeś wina?"
                    // onChange={handleChange}
                    name="wine"
                    type="number"
                    defaultValue=""
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ml 12 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    label="Ile wypiłeś piwa?"
                    // onChange={handleChange}
                    name="beer"
                    type="number"
                    defaultValue="" InputProps={{
                        endAdornment: <InputAdornment position="end">ml 5,6 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    // onChange={handleChange}
                    name="date"
                    type="datetime-local"
                    defaultValue="2020-05-24T10:30"
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