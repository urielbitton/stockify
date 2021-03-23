import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import './styles/MainContent.css'
import Settings from './screens/Settings'
import Portfolio from './screens/Portfolio'
import Discover from './screens/Discover'
import Earnings from './screens/Earnings'
import AddStock from './components/AddStock'


export default function MainContent() {

  return (
    <div className="maincontent">
      <Navbar />
      <AddStock />
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