import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getDrinks, getUsers } from '../DataFetch/DataFetch';
import UserPanelCard from './components/UserPanelCard';
import LoginPanel from './components/LoginPanel';

class UserPanel extends React.Component {
    state = {
        drinks: [],
        users: [],
        loggedUserId: 0,
        favoriteDrinks: [],
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
                const user = data.users.find(user => user.id === this.state.loggedUserId);
                this.setState({
                    users: data.users,
                    user: user,
                })
            })
            .then(() => {
                if (this.state.isLoading === false && this.state.loggedUserId !== 0) {
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
    }

    render() {
        if (this.state.loggedUserId === 0) {
            return <LoginPanel loginValue={this.props.loginValue} loginOnChange={this.props.loginOnChange} loginUser={this.props.loginUser} onToggle={this.props.onToggle} />
        } else if (this.state.users.length === 0 || this.state.drinks.length === 0) {
            return <CircularProgress color="secondary" />
        } else {
            return (
                <>
                    <UserPanelCard loginUser={this.props.loginUser} delete={this.handleDelete} onToggle={this.props.onToggle} user={this.state.user} favorites={this.state.favoriteDrinks} />
                </>
            )
        }
    }
}
export default UserPanel;