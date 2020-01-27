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

export default function AddDrinkButton(props) {
    const classes = useStyles();
    const { handleToggleForm } = props;

    return (
        <div style={{ position: 'fixed', bottom: '4%', right: '2.5%', height: 'auto' }}>
            <div className={classes.root}>
                <Fab onClick={handleToggleForm} variant="extended" color="secondary" aria-label="add">
                    <AddIcon />
                    Dodaj drinka
                </Fab>
            </div>
        </div>
    );
}
