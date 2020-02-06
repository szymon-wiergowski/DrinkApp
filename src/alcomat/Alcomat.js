import React from 'react';
import { Card } from '@material-ui/core';
import AlcomatApp from './components/AlcomatApp'
import { Typography } from '@material-ui/core';

class Alcomat extends React.Component {

    state = {
        beer: 0,
        wine: 0,
        vodka: 0,
    }

    handelChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { user, userData } = this.props
        if (user === null) {
            return (
                <>
                    <Card style={{ padding: '20px', margin: '100px', minWidth: '400px' }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            color="secondary"
                        >Musisz być zalogowany, aby wyświetlić tą zawartość.</Typography>
                        <Typography
                            variant="h6"
                        >AlcomatApp podaje w przybliżeniu zawartość alkoholu we krwi, przejdź do zakładki 'konto' aby się zalogować.</Typography>
                    </Card>
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