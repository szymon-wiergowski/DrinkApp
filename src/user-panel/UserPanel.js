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
        loggedUserId: 4,
    }

    componentDidMount() {
        getDrinks({
            sortBy: '',
            sortOrder: '',
            search: '',
        })
            .then(data => {
                this.setState({
                    drinks: data
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

        const user = this.state.users[this.state.users.findIndex(user => user.id === this.state.loggedUserId)]
        const favoritDrinks = user.favorites.map(favDrink => this.state.drinks.filter(drink => drink.id === favDrink)[0])

        return (
            <>
                <UserPanelCard user={user} favorites={favoritDrinks} />
            </>
        )
    }
}
export default UserPanel;