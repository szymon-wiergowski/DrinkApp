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
// import { getUsers } from './DataFetch/DataFetch';
import fire from './Config'
import UserPanel from './user-panel/UserPanel'

class App extends React.Component {
  state = {
    user: [],
    uid: '',
    // users: [],
    email: '',
    password: '',
  }

  componentDidMount() {
    this.authListener();
    // getUsers()
    //   .then(data => {
    //     this.setState({
    //       users: [...data.users],
    //     })
    //   })
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: [] });
      }
    })
  }

  // handelLogout = (e) => {
  //   this.setState({
  //     loggedUserId: e,
  //   })
  // }
  handelChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  // login(e) {
  //   e.preventDefault();
  //   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
  //     this.setState({ uid: u.user.uid })
  //     console.log(this.state.user)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  // signUp = (e) => {
  //   e.preventDefault();
  //   fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // };

  // logout() {
  //   fire.auth().signOut();
  // }


  // handleLoginUser = (e) => {
  //   e.preventDefault()
  //   if (this.state.users.length === 0) {
  //   } else if (this.state.username === '' || this.state.password === '') {
  //     alert('Musisz wypełnić oba pola')
  //   } else {
  //     const user = this.state.users.find(user => user.username === this.state.username);
  //     if (!user) {
  //       alert('Nie ma takiego użytkownika')
  //     } else if (user.password !== this.state.password) {
  //       alert('Hasło jest nie poprawne')
  //     } else {
  //       this.setState({
  //         loggedUserId: user.id,
  //       })
  //     }
  //   }
  // }
  // signUp={this.signUp.bind(this)}
  // user={this.state.user}
  // login={this.login.bind(this)}
  // logout={this.logout.bind(this)}
  // loginValue={this.state.value}
  // loginOnChange={this.handelChange.bind(this)}
  // loggedUserId={this.state.loggedUserId} 
  render() {
    const handleChange = this.handelChange.bind(this);
    const { user, value } = this.state
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
              render={() => <UserPanel user={user} value={value} handleChange={handleChange} isAuthed={true} />}
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
