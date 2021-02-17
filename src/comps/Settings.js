import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import Profile from './Profile' 
import SettingsOthers from './SettingsOthers'
import './styles/MonProfil.css'

export default function Account() {

  return (
    <div className="monprofilpage">
      <div className="profilesidebar">
        <div>
        <div className="profimgcont" style={{backgroundImage: `url(https://i.imgur.com/bcCbeiE.jpg)`}}>
          <div className="cameracont">
            <i className="fal fa-camera"></i>
          </div>
        </div>
        <div className="profiltitles">
          <h4>Uriel Bitton</h4>
          <h6>App Developer</h6>
        </div>
        <div className="menu">
          <NavLink exact to="/settings/" activeClassName="activeproflink"><i className="far fa-user"></i>Account</NavLink>
          <NavLink to="/settings/prefer" activeClassName="activeproflink"><i className="far fa-sliders-h"></i>Preferences</NavLink>
        </div>
        </div>
        <small className="credits">© 2021. Stockify V 1.0.1</small>
      </div>
      <div className="profilecontent">
        <Switch>
          <Route exact path="/settings/">
            <Profile />
          </Route> 
          <Route path="/settings/prefer">
            <SettingsOthers />
          </Route>

        </Switch> 
      </div>

      <div className="spacer"></div>
    </div>
  )
} 