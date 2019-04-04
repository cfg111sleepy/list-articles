import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBz2QkffIE4mUbom198W2Z0N3FDPGjCybQ",
    authDomain: "list-article.firebaseapp.com",
    databaseURL: "https://list-article.firebaseio.com",
    projectId: "list-article",
    storageBucket: "list-article.appspot.com",
    messagingSenderId: "68371861911"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true });



export {
    firebase
}