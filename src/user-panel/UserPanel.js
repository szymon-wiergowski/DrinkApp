import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

class UserPanel extends React.Component {

    render() {
        return (
            <div>
                <Fab color="secondary" aria-label="close">
                    <CloseIcon />
                </Fab>
                <List >
                    <ListItem>
                        <ListItemIcon>
                            <LocalBarOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="add" color="secondary">
                                <AddIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalBarOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="add" color="secondary">
                                <AddIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalBarOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="add" color="secondary">
                                <AddIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalBarOutlinedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="add" color="secondary">
                                <AddIcon fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        )
    }

}
export default UserPanel;