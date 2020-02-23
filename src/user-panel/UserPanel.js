import React from 'react';
import LoginForm from "./components/LoginForm"
import RegisterForm from './components/RegisterForm';
import LoggedUser from './components/LoggedUser';

class UserPanel extends React.Component {
    state = {
        displayCard: false,
        loginButtonToggle: "contained",
        registerButtonToggle: "",
    }

    handelChangePanel = (card, loginButtonToggle, registerButtonToggle) => {
        this.setState({
            displayCard: card,
            loginButtonToggle: loginButtonToggle,
            registerButtonToggle: registerButtonToggle,
        })
    }

    render() {
        const handelChangePanel = this.handelChangePanel.bind(this)
        const { displayCard, loginButtonToggle, registerButtonToggle } = this.state
        const { user, handleResetPassword, checkedRules, hendleDeleteFavoriteDrink, userData, favoriteDrinks, login, logout, signUp, value, handleChange, hendleCheckbox, error } = this.props
        if (user === null) {
            if (displayCard === false) {
                return (
                    <LoginForm
                        handleResetPassword={handleResetPassword}
                        registerButtonToggle={registerButtonToggle}
                        loginButtonToggle={loginButtonToggle}
                        handelChangePanel={handelChangePanel}
                        error={error}
                        login={login}
                        value={value}
                        handleChange={handleChange} />
                )
            } else if (displayCard === true) {
                return (
                    <RegisterForm
                        registerButtonToggle={registerButtonToggle}
                        loginButtonToggle={loginButtonToggle}
                        handelChangePanel={handelChangePanel}
                        hendleCheckbox={hendleCheckbox}
                        checkedRules={checkedRules}
                        error={error}
                        signUp={signUp}
                        value={value}
                        handleChange={handleChange} />
                )
            }
        } else {
            return (
                <LoggedUser
                    hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink}
                    userData={userData}
                    favoriteDrinks={favoriteDrinks}
                    logout={logout} />
            )
        }
    }
}
export default UserPanel;