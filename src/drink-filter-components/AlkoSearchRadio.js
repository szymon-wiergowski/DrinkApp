import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

export function AlkoSearchRadio() {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" color="secondary"><em>Alkohol:</em></FormLabel>
                <RadioGroup aria-label="alko" name="alko" value={value} onChange={handleChange}>
                    <Grid container spacing={3} justify="center" alignItems="flex-end">
                        <Grid item>
                            <FormControlLabel value="tak" control={<Radio />} label="Tak" />
                        </Grid>
                        <Grid item>
                            <FormControlLabel value="nie" control={<Radio />} label="Nie" />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </FormControl>
        </div>
    );
}