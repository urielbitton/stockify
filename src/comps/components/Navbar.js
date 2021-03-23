import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom'
import '../styles/Navbar.css'
import {AppInput, AppSwitch} from '../utils/AppInputs'
import { StoreContext } from '../StoreContext'
import firebase from 'firebase'

export default function Navbar(props) {
 
  const {darkmode, setDarkmode, foldside, setFoldSide, setShowSidebar} = useContext(StoreContext)
  
  const {title, btntitle, pushurl} = props
  const history = useHistory()

  useEffect(() => {
    if(darkmode){
      document.documentElement.style.setProperty('--white1','#232a3a')
      document.documentElement.style.setProperty('--white2','#141c2b')
    }
    else {
      document.documentElement.style.setProperty('--white1','#fff')
      document.documentElement.style.setProperty('--white2','#fff')
    }
  },[darkmode]) 

  return (
    <> 
    <nav> 
    <i class="far fa-stream navdropdownbtn" onClick={() => setShowSidebar(true)}></i>
      <div className="dynamiccont">
        <i class="far fa-stream" onClick={() => foldside?setFoldSide(false):setFoldSide(true)}></i>
        <h4>{title}</h4>
        {btntitle?<button onClick={() => history.push(pushurl)}>{btntitle}</button>:""}
      </div>
      <AppInput title="Recherche" iconclass="far fa-search" placeholder="Search..." padright={40}/>
      <div className="toolbar">
        <AppSwitch iconclass="far fa-moon-stars" checked={darkmode} onChange={(e) => setDarkmode(e.target.checked)}/>
        <i className="far fa-bell"></i>
        <i className="far fa-sign-out" onClick={() => firebase.auth().signOut()}></i>
        <i className="far fa-user" onClick={() => history.replace('/settings/')}></i>
      </div>
    </nav>
    <div style={{height:'60px'}}></div>
    </>
  )
}