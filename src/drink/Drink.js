/* eslint-disable react/jsx-no-comment-textnodes*/
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
//import CardMedia from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Popup from './Popup.js';
import EditIcon from '@material-ui/icons/Edit';
class Drink extends React.Component {
  state = {
    expanded: false,
  }
  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    return <Card style={{ width: "550px", height: "500px", margin: "16px 16px 0 50px", padding: "50px", float: "left" }}>
      <CardActionArea>
        <CardMedia
          image={this.props.img_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"><img src={this.props.img_url} alt={""} width="200px" height="200px"
          /></Typography><br />
          <Typography gutterBottom variant="h5" component="h2" className="name">
            {this.props.name}
          </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p"><b>Składniki:</b><br />
            {this.props.ingredients_name}
          </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p"><b>Zawartość alkoholu:</b><br />
            {this.props.power}
            {this.props.origin}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab variant="extended" className="fab">
          <FavoriteIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Popup key={this.props.id} name={this.props.name} recipe={this.props.recipe} ingredients={this.props.ingredients} power={this.props.power} ingredients_name={this.props.ingredients_name} img_url={this.props.img_url}></Popup>
      </CardActions>
    </Card>
  }
}
export default Drink;