import React from 'react';
import SwitchButtons from './components/SwitchButtons';
import LoginForm from "./components/LoginForm"
import RegisterForm from './components/RegisterForm';
import { Card } from '@material-ui/core';
import LoggedUser from './components/LoggedUser';

class UserPanel extends React.Component {
    state = {
        displayCard: false,
        loginButtonToggle: "contained",
        registerButtonToggle: "",
    }

    handelChangePanel = (card, loginBtn, regBtn) => {
        this.setState({
            displayCard: card,
            loginButtonToggle: loginBtn,
            registerButtonToggle: regBtn,
        })
    }

    render() {
        const handelChangePanel = this.handelChangePanel.bind(this)
        const { displayCard, loginButtonToggle, registerButtonToggle } = this.state
        const { user, checkedRules, hendleDeleteFavoriteDrink, userData, favoriteDrinks, login, logout, signUp, value, handleChange, hendleCheckbox, error } = this.props
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
                            <RegisterForm hendleCheckbox={hendleCheckbox} checkedRules={checkedRules} error={error} signUp={signUp} value={value} handleChange={handleChange} />
                        </Card>
                    </>
                )
            }
        } else {
            return (
                <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                    <LoggedUser hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink} userData={userData} favoriteDrinks={favoriteDrinks} logout={logout} />
                </Card>
            )
        }
    }
}
export default UserPanel;