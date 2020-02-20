import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const AlcomatLogout = () => {
    const matches = useMediaQuery('(min-width:740px)');
    if (matches === true) {
        return (
            <Card style={{ padding: '20px', margin: '100px', minWidth: '500px' }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    color="secondary"
                >Musisz być zalogowany, aby wyświetlić tą zawartość.</Typography>
                <Typography
                    variant="h6"
                >AlcomatApp podaje w przybliżeniu zawartość alkoholu we krwi, przejdź do zakładki 'konto' aby się zalogować.</Typography>
            </Card>
        )
    } else {
        return (
            <Container style={{ paddingTop: '30px', margin: '0px' }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    color="secondary"
                >Musisz być zalogowany, aby wyświetlić tą zawartość.</Typography>
                <Typography
                    variant="h6"
                >AlcomatApp podaje w przybliżeniu zawartość alkoholu we krwi, przejdź do zakładki 'konto' aby się zalogować.</Typography>
            </Container>
        )
    }
}

export default AlcomatLogout;