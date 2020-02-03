import React from 'react';
import SwitchButtons from './Components/SwitchButtons'
import LoginForm from './Components/LoginForm'
import RegisterForm from './Components/RegisterForm'
import { Card } from '@material-ui/core';

class UserForm extends React.Component {
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
        const { loginButtonToggle, registerButtonToggle } = this.state
        if (this.state.displayCard === false) {
            return (
                <>
                    <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                        <SwitchButtons regBtn={registerButtonToggle} loginBtn={loginButtonToggle} displayCardChange={handelChangePanel} />
                        <LoginForm value={this.props.value} handleChange={this.props.handleChange} />
                    </Card>
                </>
            )
        } else if (this.state.displayCard === true) {
            return (
                <>
                    <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                        <SwitchButtons regBtn={registerButtonToggle} loginBtn={loginButtonToggle} displayCardChange={handelChangePanel} />
                        <RegisterForm value={this.props.value} handleChange={this.props.handleChange} />
                    </Card>
                </>
            )
        }
    }
}
export default UserForm;