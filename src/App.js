import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar } from './navigation/Navigation';
import { Shops } from './shop-list/ShopList';
import Alcomat from './alcomat/Alcomat'
import AlertDialogSlide from './forms/components/AddDrinkSlide'
import './App.css'
import { PageWrapper } from './wrapper/PageWrapper';
import MapContainer from './map/Map';
import { DrinkList } from './drink-list/DrinkList'
import { getUsers } from './DataFetch/DataFetch';

class App extends React.Component {
  state = {
    users: [],
    loggedUserId: 0,
    username: "",
    password: "",
    name: "",
  }

  componentDidMount() {
    getUsers()
      .then(data => {
        this.setState({
          users: data,
        })
      })
  }
  handelLogout = (e) => {
    this.setState({
      loggedUserId: e,
    })
  }
  handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleLoginUser = (e) => {
    e.preventDefault()
    if (this.state.users.length === 0) {
    } else if (this.state.username === '' || this.state.password === '') {
      alert('Musisz wypełnić oba pola')
    } else {
      const user = this.state.users.find(user => user.username === this.state.username);
      if (!user) {
        alert('Nie ma takiego użytkownika')
      } else if (user.password !== this.state.password) {
        alert('Hasło jest nie poprawne')
      } else {
        this.setState({
          loggedUserId: user.id,
        })
      }
    }
  }

  render() {

    return (
      <BrowserRouter>
        <Navbar logout={this.handelLogout.bind(this)} oginValue={this.state.value} loginOnChange={this.handelChange.bind(this)} loggedUserId={this.state.loggedUserId} loginUser={this.handleLoginUser.bind(this)} />
        <Switch>
          <PageWrapper>
            <Route
              path="/shops"
              component={Shops}
            />
            <Route
              path="/addDrink"
              component={AlertDialogSlide}
            />
            <Route
              path="/map"
              component={MapContainer}
            />
            <Route
              path="/alcomat"
              component={Alcomat}
            />
            <Route
              path="/"
              component={DrinkList}
              exact
            />
          </PageWrapper>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
