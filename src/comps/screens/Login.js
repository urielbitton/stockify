import React from 'react'
import '../styles/Login.css'
import {AppInput} from '../utils/AppInputs'
import { Link } from 'react-router-dom'
import Logo from '../utils/Logo'

export default function Login(props) {

  const {name, setName, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props

  return (
    <div className="loginpage">
      <div className="loginwindow">
        <div className="infocont">
          <div className="loginform">
            <Logo width={40}/>
            <h1>Welcome {hasAccount&&'Back'}</h1>
            <div className="googlebtn">
              <img src="https://i.imgur.com/9oF3IFX.png" alt=""/>
              <h6>{hasAccount?"Log in":"Sign up"} With Google</h6>
              <i></i>
            </div>
            <div className="orblock">
              <h6>Or {hasAccount?"log in":"sign up"} with email</h6>
              <hr/>
            </div>
            {
              !hasAccount&&
              <AppInput placeholder="Your full name" onChange={(e) => setName(e.target.value)} />
            }
            <AppInput placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
            {emailError}
            <AppInput placeholder="Your password" type="password" onChange={(e) => setPassword(e.target.value)} />
            {passwordError}
            {
              hasAccount&&
              <div className="loginformactions">
                <AppInput type="checkbox" title="Remember Me"/>
                <Link to="forgotpass">Forgot Password</Link>
              </div>
            }
            <div className="loginbtn" onClick={hasAccount?handleLogin:(name.length&&email.length)?handleSignup:() => alert('Please fill in the required fields')}>
              <span></span>
              <h6>{hasAccount?"Log in":"Sign up"}</h6>
              <i className="fal fa-long-arrow-right"></i>
            </div>
            <div className="hasaccountcont">
              {
                hasAccount?<h5>Don't have an account? <Link to="/" onClick={() => setHasAccount(prev => !prev)}>Sign Up</Link></h5>:
                <h5>Already have an account? <Link to="/" onClick={() => setHasAccount(prev => !prev)}>Log in</Link></h5> 
              }
            </div>
          </div>
        </div>
        <div className="imgcont">
          <div className="loginnotif">
            <h5>{hasAccount?"New Features Available":"Discover Helixly"}</h5>
            <small>We've added features to add your own stocks. Check it out in your new account page</small>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
} 