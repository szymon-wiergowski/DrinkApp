import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const FavoriteDrinksList = (props) => {
    const { drinks, hendleDeleteFavoriteDrink } = props
    const favoriteDrinksList = drinks.map(drink => (
        <ListItem key={drink.id}>
            <ListItemIcon>
                <LocalBarOutlinedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={drink.name} secondary={drink.recipe} />
            <ListItemSecondaryAction>
                <IconButton onClick={() => hendleDeleteFavoriteDrink(drink.id)} aria-label="delete" color="secondary">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ))
    return (
        <>
            {favoriteDrinksList}
        </>
    )
}

export default FavoriteDrinksList;