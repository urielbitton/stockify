import React from 'react'
import './styles/Dashbox.css'

export default function Dashbox(props) {

  const {color, icon, percentage=0, title, descript} = props

  return (
    <div className="dashbox">
      <div className="dashsmall">
        <div className="dashicon" style={{background:color}}><i className={icon}></i></div>
        <div className="dashsmallinfo">
          <h2>{percentage}%</h2>
          <h4>{title}</h4>
          <small>{descript}</small>
        </div>
      </div>  
    </div> 
  )
}