import React from 'react';
import {
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import FavoriteDrinksList from './FavoriteDrinksList'

const LoggedUser = (props) => {
    const { userData, favoriteDrinks, logout, hendleDeleteFavoriteDrink } = props
    return (
        <>
            <CardHeader avatar={<Avatar aria-label="recipe">{userData.firstname.substring(0, 1)}{userData.surname.substring(0, 1)}</Avatar>} title={`Witaj, ${userData.firstname}`} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Wiek: {userData.age} lat.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Waga: {userData.weight} kg.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Wzrost: {userData.height} cm.
                </Typography>
            </CardContent>
            <Divider />
            <List >
                <FavoriteDrinksList hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink} favoriteDrinks={favoriteDrinks} />
            </List>
            <Button
                style={{
                    position: 'relative', left: '50%',
                    transform: 'translate(-50%)',
                    marginBottom: '15px',
                    width: 300,
                }}
                onClick={logout}
                variant="contained"
                color="secondary">Wyloguj się.
                </Button>
        </>
    )
}

export default LoggedUser;