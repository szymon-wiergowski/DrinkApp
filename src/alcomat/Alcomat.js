import React from 'react';
import { Card } from '@material-ui/core';
import AlcomatApp from './components/AlcomatApp'

class Alcomat extends React.Component {
    render() {
        const { user, userData } = this.props
        if (user === null) {
            return (
                <>
                    <h1>nie zaloowany</h1>
                </>
            )
        } else {
            return (
                <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                    <AlcomatApp userData={userData} />
                </Card>
            )
        }
    }
}
export default Alcomat;