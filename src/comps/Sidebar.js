import React, { useState, useContext } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import Logo from './Logo'
import { StoreContext } from './StoreContext'
import './styles/Sidebar.css'

export default function Sidebar(props) {

  const {foldside, showSidebar, setShowSidebar} = useContext(StoreContext)
  const [expandacc, setExpandAcc] = useState(false)

  return ( 
    <div className={showSidebar?"sidebar mobsidebar":foldside?"sidebar sidebarfolded":"sidebar"}>
      <div className="sidebarbg"></div>
      <i class="fal fa-stream sidebarpullupbtn" onClick={() => setShowSidebar(false)}></i>
      <div className="sidebartop">
        <Logo width={35} color="#fff"/>
        <div className="profcont">
          <img src="https://i.imgur.com/Z0LGT0W.jpg" alt="accountimg"/>
          <h5>Bjorn Ironside</h5>
        </div>  
        <div className="myaccountcont">
          <h6 onClick={() => setExpandAcc(!expandacc)} style={{background: expandacc?"rgba(255,255,255,0.1)":""}}>
            <i className="fal fa-user-alt"></i><span>My Account</span><i className="far fa-angle-right" style={{transform: expandacc?"rotate(90deg)":"rotate(0deg)"}}></i>
          </h6>
          <div className="myaccountdiv" style={{maxHeight: expandacc?"140px":"0"}}>
            <NavLink onClick={() => setShowSidebar(false)} activeClassName="activemenulink" to="/settings/"><i className="fal fa-user-circle"></i><span>My Account</span></NavLink>
            <NavLink onClick={() => setShowSidebar(false)} activeClassName="activemenulink" to="/settings/prefer"><i className="fal fa-sliders-h"></i><span>Preferences</span></NavLink>
          </div>
        </div> 
        <div className="menu">
          <NavLink title="dashboard" onClick={() => setShowSidebar(false)} activeClassName="activemenulink" exact to="/"><i className="fal fa-chart-network"></i><span>Dashboard</span></NavLink>
          <NavLink title="portfolio" onClick={() => setShowSidebar(false)} activeClassName="activemenulink" to="/portfolio"><i className="fal fa-chart-line"></i><span>Portfolio</span></NavLink>
          <NavLink title="discover" onClick={() => setShowSidebar(false)}activeClassName="activemenulink" to="/discover"><i className="fal fa-chart-pie"></i><span>Discover</span></NavLink>
          <NavLink title="earnings" onClick={() => setShowSidebar(false)} activeClassName="activemenulink" to="/earnings"><i className="fal fa-wallet"></i><span>Earnings</span></NavLink>
          <NavLink title="settings" onClick={() => setShowSidebar(false)} activeClassName="activemenulink" to="/settings"><i className="fal fa-cog"></i><span>Settings</span></NavLink>
        </div>
      </div>
      <div className="sidebarbottom">
        <button onClick={props.handleLogout}><i className="fal fa-sign-out"></i><span>Logout</span></button>
      </div>
    </div>
  )
} 