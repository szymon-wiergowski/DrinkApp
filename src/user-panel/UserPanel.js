import React from 'react';
import UserForm from './UserForm'

class UserPanel extends React.Component {

    render() {
        if (this.props.user) {
            return (
                <>
                    <UserForm value={this.props.value} handleChange={this.props.handleChange} />
                </>
            )
        } else {
            return (
                <>
                    <h1>User jest</h1>
                </>
            )
        }
    }
}
export default UserPanel;