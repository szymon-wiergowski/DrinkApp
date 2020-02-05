import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar } from './navigation/Navigation';
import { Shops } from './shop-list/ShopList';
import Alcomat from './alcomat/Alcomat';
// import AlertDialogSlide from './forms/components/AddDrinkSlide;'
import './App.css';
import { PageWrapper } from './wrapper/PageWrapper';
import MapContainer from './map/Map';
import { DrinkList } from './drink-list/DrinkList';
import { getUsers, getDrinks } from './DataFetch/DataFetch';
import fire from './Config';
import UserPanel from './user-panel/UserPanel';
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {
  state = {
    user: null,
    users: [],
    drinks: [],
    email: '',
    password: '',
    error: '',
    isLoading: false,
    firstname: '',
    surname: '',
    weight: '',
    height: '',
    age: '',
    favorites: [],
    gender: '',
    id: '',
    checkedRules: false,
  }

  componentDidMount() {
    this.authListener()
    this.setState({
      isLoading: true
    });
    Promise.all([
      getUsers(),
      getDrinks()
    ]).then(data => {
      this.setState({
        users: [...data[0]],
        drinks: [...data[1]],
        isLoading: false,
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

  hendleCheckbox = (e) => {
    this.setState({
      checkedRules: !this.state.checkedRules,
    })
  }

  handelChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({
        error: '',
      })
    }).catch((error) => {
      this.setState({
        error: error.message
      })
    })
  }

  signUp = (e) => {
    e.preventDefault();
    const { age, firstname, gender, height, surname, weight } = this.state
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      // const curentUser = fire.auth().currentUser;
      const createUserData = {
        age,
        favorites: [],
        firstname,
        gender,
        height,
        id: u.user.uid,
        surname,
        weight,
      };
      fetch('https://drinkapp-7833e.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(createUserData)
      });
      this.setState({
        isLoading: true
      });
      Promise.all([
        getUsers(),
        getDrinks()
      ]).then(data => {
        this.setState({
          users: [...data[0]],
          drinks: [...data[1]],
          isLoading: false,
          error: '',
        })
      })
    }).catch((error) => {
      this.setState({
        error: error.message
      });
    })
  };

  logout(e) {
    e.preventDefault();
    fire.auth().signOut();
    this.setState({
      user: null,
    })
  }

  hendleDeleteFavoriteDrink(id) {
    alert(`id: ${id}`)
  }

  compon

  render() {
    const handleChange = this.handelChange.bind(this);
    const login = this.login.bind(this);
    const logout = this.logout.bind(this);
    const signUp = this.signUp.bind(this);
    const hendleCheckbox = this.hendleCheckbox.bind(this);
    const hendleDeleteFavoriteDrink = this.hendleDeleteFavoriteDrink.bind(this);
    const { user, users, drinks, checkedRules, value, isLoading, error } = this.state;


    const currentUser = fire.auth().currentUser;
    let userData = [];
    let favoriteDrinks = [];

    if (isLoading) {
      return (
        <>
          <CircularProgress color="secondary" />
        </>
      )
    } else {
      if (currentUser !== null && users !== []) {
        userData = users.find(user => user.id === currentUser.uid);
        if (userData.favorites) {
          favoriteDrinks = drinks.filter(drink => userData.favorites.includes(drink.id))
        }
      }

      return (
        <BrowserRouter>
          <Navbar user={user} />
          <Switch>
            <PageWrapper>
              <Route
                path="/shops"
                component={Shops}
              />
              {/* <Route
              path="/addDrink"
              component={AlertDialogSlide}
            /> */}
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
                render={() => <UserPanel hendleCheckbox={hendleCheckbox} checkedRules={checkedRules} hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink} userData={userData} favoriteDrinks={favoriteDrinks} error={error} logout={logout} login={login} signUp={signUp} user={user} value={value} handleChange={handleChange} isAuthed={true} />}
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
      );
    }
  }
}

export default App;
