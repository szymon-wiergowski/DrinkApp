import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDrinks, getUsers } from '../DataFetch/DataFetch';
import UserPanelCard from './components/UserPanelCard';
import LoginPanel from './components/LoginPanel';

class UserPanel extends React.Component {
    state = {
        drinks: [],
        users: [],
        isLogged: true,
        loggedUserId: 1,
        favoriteDrinks: [],
        isLoading: false,
    }

    componentDidMount() {
        getDrinks()
            .then(data => {
                this.setState({
                    isLoading: true,
                })
                return data;
            })
            .then(data => {
                this.setState({
                    drinks: data.drinks,
                    isLoading: false,
                })
            })
        getUsers()
            .then(data => {
                const user = data.users.find(user => user.id === this.state.loggedUserId);
                this.setState({
                    users: data.users,
                    user: user,
                })
            })
            .then(() => {
                if (this.state.isLoading === false) {
                    const favoriteDrinks = this.state.drinks.filter(drink => this.state.user.favorites.includes(drink.id))
                    this.setState({
                        favoriteDrinks: favoriteDrinks,
                    })
                }
            })
    }

    handleDelete = (id) => {
        const index = this.state.favoriteDrinks.findIndex(drink => drink.id === id)
        const favDrinks = [...this.state.favoriteDrinks]
        favDrinks.splice(index, 1)
        this.setState({
            favoriteDrinks: favDrinks
        })
        console.log(this.state.favoriteDrinks)
        console.log(id)
    }

    render() {
        if (this.state.isLogged === false) {
            return <LoginPanel />
        } else if (this.state.users.length === 0 || this.state.drinks.length === 0) {
            return <CircularProgress color="secondary" />
        }

        // const favoritDrinks = user.favorites.map(favDrink => this.state.drinks.find(drink => drink.id === favDrink))
        // const favoritDrinks = this.state.drinks.filter(drink => this.state.user.favorites.includes(drink.id))
        return (
            <>
                <UserPanelCard delete={this.handleDelete} onToggle={this.props.onToggle} user={this.state.user} favorites={this.state.favoriteDrinks} />
            </>
        )
    }
}
export default UserPanel;