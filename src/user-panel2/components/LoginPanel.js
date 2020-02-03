import React from 'react';

import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import {
    Card
} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';

// class LoginPanel extends React.Component {
//     state = {
//         displayCard: false,
//         loginButtonToggle: "contained",
//         registerButtonToggle: "",
//         username: "",
//         name: "",
//         surname: "",
//         firstname: "",
//         email: "",
//     }

//     handelChangePanel = (card, loginBtn, regBtn) => {
//         this.setState({
//             displayCard: card,
//             loginButtonToggle: loginBtn,
//             registerButtonToggle: regBtn,
//         })
//     }

//     handelChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         if (this.state.displayCard === false) {
//             return (
//                 <>
//                     <Fab
//                         onClick={() => this.props.onToggle('right', false)()}
//                         size="small"
//                         style={{
//                             position: 'absolute',
//                             top: "5px",
//                             right: "5px"
//                         }}
//                         color="secondary" aria-label="close">
//                         <CloseIcon />
//                     </Fab>
//                     <SwitchButtons regBtn={this.state.registerButtonToggle} loginBtn={this.state.loginButtonToggle} displayCardChange={this.handelChangePanel.bind(this)} />
//                     <Login login={this.props.login} loginValue={this.props.loginValue} loginOnChange={this.props.loginOnChange} loginUser={this.props.loginUser} loggedUserId={this.props.loggedUserId} />
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <Fab
//                         onClick={() => this.props.onToggle('right', false)()}
//                         size="small"
//                         style={{
//                             position: 'absolute',
//                             top: "5px",
//                             right: "5px"
//                         }}
//                         color="secondary" aria-label="close">
//                         <CloseIcon />
//                     </Fab>
//                     <SwitchButtons regBtn={this.state.registerButtonToggle} loginBtn={this.state.loginButtonToggle} displayCardChange={this.handelChangePanel.bind(this)} />
//                     <Register loginValue={this.props.loginValue} loginOnChange={this.props.loginOnChange} signUp={this.props.signUp} value={this.state.value} onChange={this.handelChange.bind(this)} />
//                 </>
//             )
//         }
//     }
// }

// export default LoginPanel;

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         "& > * ": {
//             margin: theme.spacing(1),
//             width: 300,
//         }
//     },
//     groupButtons: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },

// }));

// const SwitchButtons = (props) => {
//     const classes = useStyles();
//     return (
//         <div className={classes.groupButtons} >
//             <ButtonGroup color="secondary" aria-label="secondary button group">
//                 <Button onClick={() => props.displayCardChange(false, "contained", "outlined")} variant={props.loginBtn} >Zaloguj się</Button>
//                 <Button onClick={() => props.displayCardChange(true, "outlined", "contained")} variant={props.regBtn} >Zarejestruj się</Button>
//             </ButtonGroup>
//         </div>
//     )
// }

const Login = (props) => {
    const classes = useStyles();
    return (
        <Card style={{ margin: "16px" }}>
            <form onSubmit={props.login} className={classes.root} noValidate autoComplete="on">
                <Typography>Nie jesteś zalogowany.</Typography>
                <TextField
                    required
                    label="Adres email"
                    value={props.loginValue}
                    onChange={props.loginOnChange}
                    name="email"
                    type="email"
                    defaultValue=""
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    required
                    value={props.loginValue}
                    onChange={props.loginOnChange}
                    label="Hasło"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    color="secondary"
                />
                <Button type="submit" variant="contained" color="secondary">Zaloguj się!</Button>
            </form>
        </Card>
    )
}

// const Register = (props) => {
//     const classes = useStyles();
//     return (
//         <Card style={{ margin: "16px" }}>
//             <form onSubmit={props.signUp} className={classes.root} noValidate autoComplete="on">
//                 <Typography>Nie masz jeszcze konta? Załóż je:</Typography>
//                 {/* <TextField
//                     required
//                     value={props.value}
//                     onChange={props.onChange}
//                     type="text"
//                     name="username"
//                     label="Nazwa użytkownika"
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 <TextField
//                     required
//                     value={props.value}
//                     onChange={props.onChange}
//                     type="text"
//                     name="firstname"
//                     label="Imię"
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 <TextField
//                     required
//                     type="text"
//                     name="surname"
//                     label="Nazwisko"
//                     variant="outlined"
//                     color="secondary"
//                 /> */}
//                 <TextField
//                     required
//                     label="Adres email"
//                     value={props.loginValue}
//                     onChange={props.loginOnChange}
//                     name="email"
//                     type="email"
//                     defaultValue=""
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 {/* <TextField
//                     required
//                     type="number"
//                     name="weight"
//                     label="Waga"
//                     InputProps={{
//                         endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
//                     }}
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 <TextField
//                     required
//                     type="number"
//                     name="height"
//                     label="Wzrost"
//                     InputProps={{
//                         endAdornment: <InputAdornment position="start">cm</InputAdornment>,
//                     }}
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 <TextField
//                     required
//                     type="number"
//                     label="Wiek"
//                     InputProps={{
//                         endAdornment: <InputAdornment position="start">lat</InputAdornment>,
//                     }}
//                     variant="outlined"
//                     color="secondary"
//                 /> */}
//                 <TextField
//                     required
//                     value={props.loginValue}
//                     onChange={props.loginOnChange}
//                     label="Hasło"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 {/* <TextField
//                     required

//                     label="Powtórz hasło"
//                     type="password"
//                     autoComplete="current-password"
//                     variant="outlined"
//                     color="secondary"
//                 />
//                 <FormControlLabel
//                     control={
//                         <Checkbox value="checkedA" />
//                     }
//                     label="Zapoznałem się z regulaminem:*"
//                 />
//                 <Link
//                     color="secondary"
//                     component="button"
//                     variant="body2"
//                     onClick={() => {
//                         console.info("I'm a button.");
//                     }}
//                 >
//                     Przejdź do regulaminu.
//                 </Link> */}
//                 <Button type="submit" variant="contained" color="secondary">Zarejestruj się</Button>
//             </form>
//         </Card>
//     )
// }