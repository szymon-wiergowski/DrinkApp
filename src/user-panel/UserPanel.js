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
        loggedUserId: 1
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
        if (this.state.isLogged === false) {
            return <LoginPanel />
        } else if (this.state.users.length === 0 || this.state.drinks.length === 0) {
            return <CircularProgress color="secondary" />
        }

        const user = this.state.users.find(user => user.id === this.state.loggedUserId);
        // const favoritDrinks = user.favorites.map(favDrink => this.state.drinks.find(drink => drink.id === favDrink))
        const favoritDrinks = this.state.drinks.filter(drink => user.favorites.includes(drink.id))

        return (
            <>
                <UserPanelCard onToggle={this.props.onToggle} user={user} favorites={favoritDrinks} />
            </>
        )
    }
}
export default UserPanel;