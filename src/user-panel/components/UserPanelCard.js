import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import {
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import UserFavList from './UserFavList'
import Button from '@material-ui/core/Button';

const UserPanelCard = (props) => {

    return (
        <>
            <Fab
                onClick={() => props.onToggle('right', false)()}
                size="small"
                style={{
                    position: 'absolute',
                    top: "5px",
                    right: "5px"
                }}
                color="secondary" aria-label="close">
                <CloseIcon />
            </Fab>
            <Card style={{ margin: "16px" }}>
                <CardHeader avatar={<Avatar aria-label="recipe">JK</Avatar>} title={`Witaj, ${props.user.name}`} />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Wiek: {props.user.age} lat.
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Waga: {props.user.weight} kg.
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Wzrost: {props.user.height} cm.
                </Typography>
                </CardContent>
                <Divider />
                <List >
                    <UserFavList delete={props.delete} favorites={props.favorites} />
                </List>
                <Button
                    style={{
                        position: 'relative', left: '50%',
                        transform: 'translate(-50%)',
                        marginBottom: '15px',
                        width: 300,
                    }}
                    onClick={() => props.logout(0)}
                    variant="contained"
                    color="secondary">Wyloguj się.
            </Button>
            </Card>
        </>
    )
}

export default UserPanelCard;