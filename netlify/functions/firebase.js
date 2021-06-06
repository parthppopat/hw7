const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBDHjtC5F_ndaNWJ0U9-gHEfctyR29s2aE",
  authDomain: "kiei-451-e377c.firebaseapp.com",
  projectId: "kiei-451-e377c",
  storageBucket: "kiei-451-e377c.appspot.com",
  messagingSenderId: "91611427179",
  appId: "1:91611427179:web:abe8a275a68beaf2ad1c2e"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase