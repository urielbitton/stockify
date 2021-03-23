import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBgMjbPaHbJ_bgaVqr4Rx5p43daH7UMeRA",
  authDomain: "stockify-75d1f.firebaseapp.com",
  projectId: "stockify-75d1f",
  storageBucket: "stockify-75d1f.appspot.com",
  messagingSenderId: "20636572719",
  appId: "1:20636572719:web:9fc0f03e02f9b8c9dffada"
})

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 
