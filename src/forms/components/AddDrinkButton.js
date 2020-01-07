import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={{ position: 'fixed', bottom: '0px', right: '0px' }}>
            <div className={classes.root}>
                <Fab href="/addDrink" variant="extended" color="secondary" aria-label="add">
                    <AddIcon />
                    Dodaj drinka
                </Fab>
            </div>
        </div>
    );
}
