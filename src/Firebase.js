import  * as firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyCJUgXUhibQpXSFnQYi02Ra1s_0vwUCnAY",
    authDomain: "salud-mental-ef80c.firebaseapp.com",
    databaseURL: "https://salud-mental-ef80c.firebaseio.com",
    projectId: "salud-mental-ef80c",
    storageBucket: "salud-mental-ef80c.appspot.com",
    messagingSenderId: "132646983486",
    appId: "1:132646983486:web:1ee1ee05263fc601fdfe6f",
    measurementId: "G-4FME3X8TVM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAuth=firebase.auth();
export default firebase;
