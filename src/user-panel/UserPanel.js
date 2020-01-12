import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import UserFavList from './UserFavList'
import { getDrinks, getUsers } from '../DataFetch/DataFetch'

class UserPanel extends React.Component {
    state = {
        drinks: [],
        users: []
    }


    componentDidMount() {
        getDrinks()
            .then(data => {
                this.setState({
                    drinks: data.drinks
                })
            })
        getUsers()
            .then(data => {
                this.setState({
                    users: data.users
                })
            })
    }

    render() {
        if (this.state.users.length === 0 || this.state.drinks.length === 0) {
            return <CircularProgress color="secondary" />
        }
        const drinks = [...this.state.drinks]
        const users = [...this.state.users]
        const user = users.filter(user => user.id === 2)
        console.log(user[0])
        for (let i = 0; i++; i < user[0].favorites.length) {
            console.log('a')
        }

        // const userFavorites = favDrink.find.favorites.map(drink => (
        //     <UserFavList key={drink.id} name={drink.name} recipe={drink.recipe} />
        // ))


        return (
            <div>
                <Fab
                    size="small"
                    style={{
                        position: 'absolute',
                        top: "5px",
                        right: "5px"
                    }}
                    color="secondary" aria-label="close">
                    <CloseIcon />
                </Fab>
                <Card style={{ margin: "16px" }}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">JK</Avatar>
                        }
                        title={user[0].name} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Wiek: {user[0].age} lat.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Waga: {user[0].weight} kg.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Wzrost: {user[0].height} cm.
                        </Typography>
                    </CardContent>
                    <Divider />
                    <List >
                        {/* {userFavorites} */}
                    </List>
                </Card>
            </div>
        )
    }

}
export default UserPanel;