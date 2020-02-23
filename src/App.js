import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./navigation/Navigation";
import Alcomat from "./alcomat/Alcomat";
import "./App.css";
import { PageWrapper } from "./wrapper/PageWrapper";
import MapContainer from "./map/Map";
import { DrinkList } from "./drink-list/DrinkList";
import { getUsers, getDrinks } from "./DataFetch/DataFetch";
import fire from "./Config";
import UserPanel from "./user-panel/UserPanel";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dashboard from "./dashboard/dashboard";

class App extends React.Component {
  state = {
    user: null,
    users: [],
    drinks: [],
    email: "",
    password: "",
    error: "",
    isLoading: false,
    firstname: "",
    surname: "",
    weight: "",
    height: "",
    age: "",
    favorites: [],
    gender: "",
    id: "",
    checkedRules: false,
    validationOk: false,
  };

  componentDidMount() {
    this.authListener();
    this.setState({
      isLoading: true
    });
    Promise.all([getUsers(), getDrinks()]).then(data => {
      this.setState({
        users: [...data[0]],
        drinks: [...data[1]],
        isLoading: false
      });
    });
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  hendleCheckbox = e => {
    this.setState({
      checkedRules: !this.state.checkedRules
    });
  };

  handelChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({
          error: ""
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  handleResetPassword = () => {
    if (this.state.email === '') {
      alert(`Wpisz email na który ma być wysłane hasło.`)
    } else {
      fire.auth().sendPasswordResetEmail(this.state.email);
      alert(`Na adres ${this.state.email} został wysłany link do resetowania hasła.`)
    }
  }

  registerValidate = () => {
    const re = /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2}/;
    if (!re.test(this.state.firstname)) {
      this.setState({
        error: "Imię musi zawierać przynajmniej dwie litery.",
        validationOk: false
      });
    } else if (!re.test(this.state.surname)) {
      this.setState({
        error: "Nazwisko musi zawierać przynajmniej dwie litery.",
        validationOk: false
      });
    } else if (this.state.gender === "") {
      this.setState({
        error: "Wybież płeć.",
        validationOk: false
      });
    } else if (!Number.isInteger(parseInt(this.state.weight))) {
      this.setState({
        error: "Podaj wagę.",
        validationOk: false
      });
    } else if (
      parseInt(this.state.weight) < 30 ||
      parseInt(this.state.weight) > 300
    ) {
      this.setState({
        error: "Waga musi być w przedziale od 30 do 300 kg.",
        validationOk: false
      });
    } else if (!Number.isInteger(parseInt(this.state.height))) {
      this.setState({
        error: "Podaj wzrost.",
        validationOk: false
      });
    } else if (
      parseInt(this.state.height) < 30 ||
      parseInt(this.state.height) > 250
    ) {
      this.setState({
        error: "Wzrost musi być w przedziale od 30 do 250 cm.",
        validationOk: false
      });
    } else if (!Number.isInteger(parseInt(this.state.age))) {
      this.setState({
        error: "Podaj wiek.",
        validationOk: false
      });
    } else if (
      parseInt(this.state.age) < 18 ||
      parseInt(this.state.age) > 120
    ) {
      this.setState({
        error: "Wiek musi być w przedziale od 18 do 120 lat.",
        validationOk: false
      });
    } else if (!this.state.checkedRules) {
      this.setState({
        error: "Musisz zaakceptować regulamin.",
        validationOk: false
      });
    } else {
      this.setState({
        error: "",
        validationOk: true
      });
    }
  };

  signUp = e => {
    e.preventDefault();
    this.registerValidate();
    setTimeout(() => {
      if (this.state.validationOk) {
        const { age, firstname, gender, height, surname, weight } = this.state;
        fire
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(u => {
            const createUserData = {
              age,
              favorites: [],
              firstname,
              gender,
              height,
              id: u.user.uid,
              surname,
              weight
            };
            fetch("https://drinkapp-7833e.firebaseio.com/users.json", {
              method: "POST",
              body: JSON.stringify(createUserData)
            });
            this.setState({
              isLoading: true
            });
            Promise.all([getUsers(), getDrinks()]).then(data => {
              this.setState({
                users: [...data[0]],
                drinks: [...data[1]],
                isLoading: false,
                error: ""
              });
            });
          })
          .catch(error => {
            this.setState({
              error: error.message
            });
          });
      }
    }, 1000);
  };

  logout(e) {
    e.preventDefault();
    fire.auth().signOut();
    this.setState({
      user: null
    });
  }

  hendleDeleteFavoriteDrink(id) {
    alert(`id: ${id}`);
  }

  render() {
    const handleResetPassword = this.handleResetPassword.bind(this)
    const handleChange = this.handelChange.bind(this);
    const login = this.login.bind(this);
    const logout = this.logout.bind(this);
    const signUp = this.signUp.bind(this);
    const hendleCheckbox = this.hendleCheckbox.bind(this);
    const hendleDeleteFavoriteDrink = this.hendleDeleteFavoriteDrink.bind(this);
    const {
      user,
      users,
      drinks,
      checkedRules,
      value,
      isLoading,
      error
    } = this.state;
    const currentUser = fire.auth().currentUser;
    let userData = [];
    let favoriteDrinks = [];

    if (isLoading) {
      return (
        <>
          <CircularProgress color="secondary" />
        </>
      );
    } else {
      if (currentUser !== null && users !== []) {
        userData = users.find(user => user.id === currentUser.uid);
        if (userData.favorites) {
          favoriteDrinks = drinks.filter(drink =>
            userData.favorites.includes(drink.id)
          );
        }
      }
      return (
        <BrowserRouter>
          <Navbar user={user} />
          <Switch>
            <PageWrapper>
              <Route path="/" component={Dashboard} exact />
              <Route path="/map" component={MapContainer} />
              <Route
                path="/alcomat"
                render={() => (
                  <Alcomat userData={userData} user={user} isAuthed={true} />
                )}
              />
              <Route
                path="/userpanel"
                render={() => (
                  <UserPanel
                    handleResetPassword={handleResetPassword}
                    hendleCheckbox={hendleCheckbox}
                    checkedRules={checkedRules}
                    hendleDeleteFavoriteDrink={hendleDeleteFavoriteDrink}
                    userData={userData}
                    favoriteDrinks={favoriteDrinks}
                    error={error}
                    logout={logout}
                    login={login}
                    signUp={signUp}
                    user={user}
                    value={value}
                    handleChange={handleChange}
                    isAuthed={true}
                  />
                )}
              />
              <Route path="/drinklist" component={DrinkList} />
            </PageWrapper>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
