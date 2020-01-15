import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDrinks, getUsers } from '../DataFetch/DataFetch';
import UserPanelCard from './components/UserPanelCard';
import LoginPanel from './components/LoginPanel';

class UserPanel extends React.Component {
    state = {
        drinks: [],
        users: [],
        isLoading: false,
    }

    componentDidMount() {
        this.setState({
            loggedUserId: this.props.loggedUserId,
        })
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
                this.setState({
                    users: data.users,
                })
            })
    }

    handleDelete = (id) => {
        const index = this.state.favoriteDrinks.findIndex(drink => drink.id === id)
        const favDrinks = [...this.state.favoriteDrinks]
        favDrinks.splice(index, 1)
        this.setState({
            favoriteDrinks: favDrinks
        })
    }

    render() {
        if (this.props.loggedUserId === 0) {
            return <LoginPanel loginValue={this.props.loginValue} loginOnChange={this.props.loginOnChange} loginUser={this.props.loginUser} onToggle={this.props.onToggle} />
        } else if (this.state.users.length === 0 || this.state.drinks.length === 0) {
            return <CircularProgress color="secondary" />
        } else if (this.state.isLoading === false) {
            const user = this.state.users.find(user => user.id === this.props.loggedUserId);
            const favoriteDrinks = this.state.drinks.filter(drink => user.favorites.includes(drink.id))

            return (
                <>
                    <UserPanelCard delete={this.handleDelete} onToggle={this.props.onToggle} user={user} favorites={favoriteDrinks} />
                </>
            )
        }
    }
}
export default UserPanel;