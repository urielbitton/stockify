import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import './styles/MainContent.css'
import Settings from './Settings'
import Portfolio from './Portfolio'
import Discover from './Discover'
import Earnings from './Earnings'


export default function MainContent() {

  return (
    <div className="maincontent">
      <Navbar />
      <div className="maincontentinner">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/earnings">
            <Earnings />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch> 
      </div>
    </div>
  )
}