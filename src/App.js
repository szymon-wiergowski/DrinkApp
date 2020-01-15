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

  handelChange = (e) => {
    console.log(e.target.type)
    console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleLoginUser = (e) => {
    e.preventDefault()
    alert('login')
  }

  render() {

    return (
      <BrowserRouter>
        <Navbar loginValue={this.state.value} loginOnChange={this.handelChange.bind(this)} loggedUserId={this.state.loggedUserId} loginUser={this.handleLoginUser.bind(this)} />
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
