import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA8REupQlXYTxa8oU45PvJ0frzn4K3F-Ss",
    authDomain: "drinkapp-7833e.firebaseapp.com",
    databaseURL: "https://drinkapp-7833e.firebaseio.com",
    projectId: "drinkapp-7833e",
    storageBucket: "drinkapp-7833e.appspot.com",
    messagingSenderId: "671386710238",
    appId: "1:671386710238:web:c7338e579a4c5bc67d524f",
    measurementId: "G-FWPKH8HRF1"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;