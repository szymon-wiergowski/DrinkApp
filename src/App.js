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

class App extends React.Component {
  state = {
    user: [],
    loggedUserId: 0,
  }

  handleLoginUser = (id) => {
    this.setState({
      loggedUserId: id,
    })
  }

  render() {

    return (
      <BrowserRouter>
        <Navbar loggedUserId={this.state.loggedUserId} loginUser={this.handleLoginUser} />
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
