import React from 'react';
import {
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

const LoggedUser = (props) => {
    return (
        <>
            <CardHeader avatar={<Avatar aria-label="recipe">JK</Avatar>} title={`Witaj, `} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Wiek:  lat.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Waga:  kg.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Wzrost:  cm.
                </Typography>
            </CardContent>
            <Divider />
            <List >
                {/* <UserFavList delete={props.delete} favorites={props.favorites} /> */}
            </List>
            <Button
                style={{
                    position: 'relative', left: '50%',
                    transform: 'translate(-50%)',
                    marginBottom: '15px',
                    width: 300,
                }}
                onClick={props.logout}
                variant="contained"
                color="secondary">Wyloguj się.
                </Button>
        </>
    )
}

export default LoggedUser;