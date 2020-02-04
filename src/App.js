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
import fire from './Config'
import UserPanel from './user-panel/UserPanel'

class App extends React.Component {
  state = {
    user: null,
    users: [],
    userData: [],
    email: '',
    password: '',
    error: '',
  }

  componentDidMount() {
    this.authListener();
    getUsers()
      .then(data => {
        this.setState({
          users: [...data.users],
        })
      })
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  handelChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {


      this.setState({ uid: u.user.uid })
    }).catch((error) => {
      this.setState({
        error: error.message
      })
    })
  }

  signUp = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      this.setState({
        error: error.message
      })
    })
  };

  logout(e) {
    e.preventDefault();
    fire.auth().signOut();
    this.setState({
      user: null,
    })
  }

  render() {
    const handleChange = this.handelChange.bind(this);
    const login = this.login.bind(this);
    const logout = this.logout.bind(this);
    const signUp = this.signUp.bind(this);
    const { user, value, error } = this.state
    console.log(this.state.users)
    return (
      <BrowserRouter>
        <Navbar user={user} />
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
              path="/userpanel"
              render={() => <UserPanel error={error} logout={logout} login={login} signUp={signUp} user={user} value={value} handleChange={handleChange} isAuthed={true} />}
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
