import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Popup from '../../drink/Popup-logged';

const FavoriteDrinksList = (props) => {
    const { favoriteDrinks, hendleDeleteFavoriteDrink } = props
    if (favoriteDrinks.length !== 0) {
        const favoriteDrinksList = favoriteDrinks.map(drink => (
            <ListItem key={drink.id}>
                <ListItemIcon>
                    <LocalBarOutlinedIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={drink.name} secondary={drink.recipe} />
                <ListItemSecondaryAction>
                <Popup 
              key={drink.id}
              name={drink.name}
              recipe={drink.recipe}
              ingredients={drink.ingredients}
              power={drink.power}
              ingredients_name={drink.ingredients_name}
              img_url={drink.img_url}
              origin={drink.origin}
            ></Popup>

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
    } else {
        return (
            <>
                <h1>Brak ulubionych drinków</h1>
            </>
        )
    }

}

export default FavoriteDrinksList;