import React from 'react';
import LoggedUser from './Components/LoggedUser'
import SwitchButtons from './Components/SwitchButtons'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import { Card } from '@material-ui/core';

class UserPanel extends React.Component {
    state = {
        displayCard: false,
        loginButtonToggle: "contained",
        registerButtonToggle: "",
    }

    handelChangePanel = (card, loginBtn, regBtn) => {
        this.setState({
<<<<<<< HEAD
            displayCard: card,
            loginButtonToggle: loginBtn,
            registerButtonToggle: regBtn,
=======
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
            });
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
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6
        })
    }

    render() {
        const handelChangePanel = this.handelChangePanel.bind(this)
        const { displayCard, loginButtonToggle, registerButtonToggle } = this.state
        const { user, login, logout, signUp, value, handleChange, error } = this.props
        if (user === null) {
            if (displayCard === false) {
                return (
                    <>
                        <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                            <SwitchButtons regBtn={registerButtonToggle} loginBtn={loginButtonToggle} handelChangePanel={handelChangePanel} />
                            <LoginForm error={error} login={login} value={value} handleChange={handleChange} />
                        </Card>
                    </>
                )
            } else if (displayCard === true) {
                return (
                    <>
                        <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                            <SwitchButtons regBtn={registerButtonToggle} loginBtn={loginButtonToggle} handelChangePanel={handelChangePanel} />
                            <RegisterForm error={error} signUp={signUp} value={value} handleChange={handleChange} />
                        </Card>
                    </>
                )
            }
        } else {
            return (
                <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                    <LoggedUser logout={logout} />
                </Card>
            )
        }
    }
}
export default UserPanel;