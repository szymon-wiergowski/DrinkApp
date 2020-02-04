<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./navigation/Navigation";
import { Shops } from "./shop-list/ShopList";
import Alcomat from "./alcomat/Alcomat";
import "./App.css";
import { PageWrapper } from "./wrapper/PageWrapper";
import MapContainer from "./map/Map";
import { DrinkList } from "./drink-list/DrinkList";
import { getUsers } from "./DataFetch/DataFetch";
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6

class App extends React.Component {
  state = {
    user: null,
    users: [],
<<<<<<< HEAD
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
=======
    loggedUserId: 0,
    username: "",
    password: "",
    name: ""
  };

  componentDidMount() {
    getUsers().then(data => {
      this.setState({
        users: data
      });
    });
  }
  handelLogout = e => {
    this.setState({
      loggedUserId: e
    });
  };
  handelChange = e => {
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

<<<<<<< HEAD
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
=======
  handleLoginUser = e => {
    e.preventDefault();
    if (this.state.users.length === 0) {
    } else if (this.state.username === "" || this.state.password === "") {
      alert("Musisz wypełnić oba pola");
    } else {
      const user = this.state.users.find(
        user => user.username === this.state.username
      );
      if (!user) {
        alert("Nie ma takiego użytkownika");
      } else if (user.password !== this.state.password) {
        alert("Hasło jest nie poprawne");
      } else {
        this.setState({
          loggedUserId: user.id
        });
      }
    }
  };
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6

  render() {
    const handleChange = this.handelChange.bind(this);
    const login = this.login.bind(this);
    const logout = this.logout.bind(this);
    const signUp = this.signUp.bind(this);
    const { user, value, error } = this.state
    console.log(this.state.users)
    return (
      <BrowserRouter>
<<<<<<< HEAD
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
=======
        <Navbar
          logout={this.handelLogout.bind(this)}
          oginValue={this.state.value}
          loginOnChange={this.handelChange.bind(this)}
          loggedUserId={this.state.loggedUserId}
          loginUser={this.handleLoginUser.bind(this)}
        />
        <Switch>
          <PageWrapper>
            <Route path="/shops" component={Shops} />
            <Route path="/map" component={MapContainer} />
            <Route path="/alcomat" component={Alcomat} />
            <Route path="/" component={DrinkList} exact />
>>>>>>> 649fb50aaa21e8614cf3d3ca5e63288cc82282e6
          </PageWrapper>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
