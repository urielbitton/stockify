import React, { useContext, useEffect, useState } from 'react'
import { AppSelect, AppSwitch } from './AppInputs'
import './styles/ProfilContent.css'
import {StoreContext} from './StoreContext'

export default function ParamAutres() { 

  const {darkmode, setDarkmode, setStatusBar, themecolor, setThemeColor} = useContext(StoreContext)  
 
  useEffect(() => {
    document.documentElement.style.setProperty('--color',themecolor)
    document.documentElement.style.setProperty('--colorshadow',themecolor+'aa')
  },[themecolor])
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
    <div className="profilcontent">
      <h4>Autres</h4>
      <div className="profilgrid">
        <h4>Theme Settings</h4> 
        <AppSwitch title="Mode Nuit" iconclass="far fa-moon-stars" checked={darkmode} onChange={(e) => setDarkmode(e.target.checked)}/>
        <AppSelect title="Couleur Theme" options={[{name:'Default',value:'#2e66f5'},{name:'Or',value:'#fca816'},{name:'Khaki Vert',value:'#93b160'},{name:'Mauve Royale',value:'#9012ff'}]} value={themecolor} onChange={(e) => setThemeColor(e.target.value)}/>
        <h4>Notifications</h4> 
        <AppSwitch title="Montrer Notifications" iconclass="far fa-bell"/>
        <AppSwitch title="Notifications Push" iconclass="far fa-bell-exclamation"/>
      </div>
    </div>
  )
}