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
            displayCard: card,
            loginButtonToggle: loginBtn,
            registerButtonToggle: regBtn,
        })
    }

    render() {
        const handelChangePanel = this.handelChangePanel.bind(this)
        const { displayCard, loginButtonToggle, registerButtonToggle } = this.state
        const { user, hendleDeleteFavoriteDrink, userData, drinks, login, logout, signUp, value, handleChange, error } = this.props
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
                    <LoggedUser hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink} userData={userData} drinks={drinks} logout={logout} />
                </Card>
            )
        }
    }
}
export default UserPanel;