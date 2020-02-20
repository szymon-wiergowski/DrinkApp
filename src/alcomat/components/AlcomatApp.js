import React from 'react';
import { Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Card } from '@material-ui/core';

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

    const { userData, calculatePromiles, handleChange, promiles } = props
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:740px)');

    if (matches === true) {
        return (
            <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
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
                        onChange={handleChange}
                        name="gender"
                        type="gender"
                        defaultValue=""
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        label="Ile wypiłeś wódki?"
                        onChange={handleChange}
                        name="vodka"
                        type="number"
                        defaultValue=""
                        InputProps={{
                            endAdornment: <InputAdornment position="end">ml 40 %</InputAdornment>,
                        }}
                        variant="outlined"
                        color="secondary"
                        inputProps={{ min: "0", max: "10", step: "1" }}
                    />
                    <TextField
                        label="Ile wypiłeś wina?"
                        onChange={handleChange}
                        name="wine"
                        type="number"
                        defaultValue=""
                        InputProps={{
                            endAdornment: <InputAdornment position="end">ml 12 %</InputAdornment>,
                        }}
                        variant="outlined"
                        color="secondary"
                        inputProps={{ min: "0", max: "10", step: "1" }}
                    />
                    <TextField
                        label="Ile wypiłeś piwa?"
                        onChange={handleChange}
                        name="beer"
                        type="number"
                        defaultValue="" InputProps={{
                            endAdornment: <InputAdornment position="end">ml 5,6 %</InputAdornment>,
                        }}
                        variant="outlined"
                        color="secondary"
                        inputProps={{ min: "0", max: "10", step: "1" }}
                    />
                    <TextField
                        onChange={handleChange}
                        label="Ile godzin temu zacząłeś pić?"
                        name="hours"
                        type="number"
                        defaultValue="" InputProps={{
                            endAdornment: <InputAdornment position="end">godzin</InputAdornment>,
                        }}
                        variant="outlined"
                        color="secondary"
                        inputProps={{ min: "0", max: "20", step: "1" }}
                    />
                    <Button
                        onClick={calculatePromiles}
                        variant="contained"
                        color="secondary">Oblicz promile!
                </Button>
                    {promiles != null ? <Typography
                        gutterBottom
                        variant="h5"
                        color="secondary"
                    >{`Przybliżona zawartość alkoholu to: ${promiles} promili. * nie dotyczy Polaków i Rusków`}</Typography> : null}
                </form>
            </Card>
        )
    } else {
        return (
            <form className={classes.root} style={{ paddingTop: '30px' }} noValidate autoComplete="on">
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
                    onChange={handleChange}
                    name="gender"
                    type="gender"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    label="Ile wypiłeś wódki?"
                    onChange={handleChange}
                    name="vodka"
                    type="number"
                    defaultValue=""
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ml 40 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                    inputProps={{ min: "0", max: "10", step: "1" }}
                />
                <TextField
                    label="Ile wypiłeś wina?"
                    onChange={handleChange}
                    name="wine"
                    type="number"
                    defaultValue=""
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ml 12 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                    inputProps={{ min: "0", max: "10", step: "1" }}
                />
                <TextField
                    label="Ile wypiłeś piwa?"
                    onChange={handleChange}
                    name="beer"
                    type="number"
                    defaultValue="" InputProps={{
                        endAdornment: <InputAdornment position="end">ml 5,6 %</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                    inputProps={{ min: "0", max: "10", step: "1" }}
                />
                <TextField
                    onChange={handleChange}
                    label="Ile godzin temu zacząłeś pić?"
                    name="hours"
                    type="number"
                    defaultValue="" InputProps={{
                        endAdornment: <InputAdornment position="end">godzin</InputAdornment>,
                    }}
                    variant="outlined"
                    color="secondary"
                    inputProps={{ min: "0", max: "20", step: "1" }}
                />
                {promiles != null ? <Typography
                    gutterBottom
                    variant="h5"
                    color="secondary"
                >{`Przybliżona zawartość alkoholu to: ${promiles} promili. * nie dotyczy Polaków i Rusków`}</Typography> : null}
                <Button
                    onClick={calculatePromiles}
                    variant="contained"
                    color="secondary">Oblicz promile!
                </Button>
            </form>
        )
    }
}

export default AlcomatApp;