import React, {useState, useEffect} from "react"
import { BrowserRouter as Router,Switch,Route,Link,NavLink } from "react-router-dom"
import "./styles.css"
import AppContainer from './comps/AppContainer'
import Login from './comps/screens/Login'
import StoreContextProvider from './comps/StoreContext'
import {db} from './comps/utils/Fire'
import firebase from 'firebase'
 
export default function App() {
 
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(true)
  
  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
 
  const handleLogin = () => { 
    clearErrors()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user/disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
        break
        case "auth/wrong-password":
          setPasswordError(err.message)
        break
        default:
      }  
    })
  } 
  const handleSignup = () => {
    clearErrors()
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
        break
        case "auth/weak-password":
          setPasswordError(err.message)
        break
        default: 
      }
    })
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        user.updateProfile({
          displayName: name,
          photoURL: 'https://i.imgur.com/f6b4cp3.jpg'
        })  
        const userinfo = {
          uid: user.uid,
          fullname: name?name:'Guest User',
          email: user.email,
          phone: "",
          city: "",
          provstate: "",
          jobtitle: "",
          website:  "",
          country: "",
          profimg: "https://i.imgur.com/1OKoctC.jpg",
          stockslist: [],
          customstocks: [], 
          settings: {
            
          }  
        }
        db.collection('users').doc(user.uid).set({
          userinfo
        }) 
      }//if (user)
      else {
        setUser(null)
      } 
    }) 
  }
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs()
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
  } 

  useEffect(() => { 
    authListener()
  },[])  

  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          {user?<AppContainer />:
          <Login 
            email={email} 
            name={name}
            setName={setName}
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleLogin={handleLogin} 
            handleSignup={handleSignup} 
            hasAccount={hasAccount} 
            setHasAccount={setHasAccount} 
            emailError={emailError}
            passwordError={passwordError}
          />
        }
        </Router>
      </StoreContextProvider>
    </div>
  );
}
 

//checkout finnhub.io for alternate stocks API
