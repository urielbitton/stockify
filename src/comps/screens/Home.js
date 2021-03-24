import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom"
import Calendars from '../utils/Calendars'
import Charts from "../utils/Chart"
import StockCard from '../components/StockCard'
import { StoreContext } from '../StoreContext'
import firebase from 'firebase'
import '../styles/Home.css'
import thousSep from '../utils/ThousSep'
import {db} from '../utils/Fire'

function Home() {
 
  const {collection, myuser, setShowAdder, setEditMode, setEditData} = useContext(StoreContext)
  const [daytime, setDayTime] = useState('')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const thedate = new Date().toLocaleDateString('en', options)
  const user = firebase.auth().currentUser

  const stocksrow = collection && collection
    .filter(x => myuser.stockslist&&myuser.stockslist.includes(x[0].quotes[0].symbol)) 
    .map(el => {
      return <StockCard el={el[0].quotes[0]}/> 
  })
  const stockstablerow = myuser.customstocks && myuser.customstocks.map(el => {
      return <tr>
        <td>{el.name}</td>
        <td>{el.symbol}</td>
        <td>{thousSep(el.score)}</td>
        <td>{thousSep(el.high)}</td>
        <td>{thousSep(el.low)}</td>
        <td>{el.change}</td>
        <td>
          <i className="fal fa-edit" onClick={() => editFunc(el)}></i>
          <i className="fal fa-trash-alt" onClick={() => deleteStock(el)}></i>
        </td> 
      </tr>
  })

  function editFunc(el) {
    setShowAdder(prev => !prev)
    setEditData({
      name: el.name,
      symbol: el.symbol,
      score: el.score,
      high: el.high,
      low: el.low,
      change: el.change
    })
    setEditMode(true)
  }
  function deleteStock(el) {
    let confirm = window.confirm(`Are you sure you want to delete the stock ${el.name}?`)
    if(confirm) {
      myuser.customstocks.forEach(el2 => {
        if(el2.symbol===el.symbol) {
          let itemindex = myuser.customstocks.indexOf(el)
          myuser.customstocks.splice(itemindex,1)
        }
      })
      db.collection('users').doc(user.uid).update({
        userinfo: myuser 
      })
    }
  }
  function addFunc() {
    setShowAdder(prev => !prev)
    setEditMode(false)
  } 

  useEffect(() => {
    let time = new Date().getHours()
    if(time >= 0 && time < 12) 
      setDayTime('Good Morning') 
    else if(time >= 12 && time <=17)
      setDayTime('Good Afternoon')
    else  
      setDayTime('Good Evening')
  },[])
    
  return (  
    <div className="home apppage">
      <div className="apptitles">
        <div>
          <h4>{daytime} {user.displayName}</h4>
          <h5>{thedate}</h5>
        </div>
        <button onClick={() => addFunc()}>
          <i class="fal fa-chart-line"></i>
          <span>Add Stock</span>
        </button>
      </div>
      <div className="stocksrow">
        {stocksrow}
      </div>
      <div className="homegrid">
        <div className="homemain">
          <div className="dashgraph dashbox">
            <Charts type="line-chart" /> 
          </div>
          <div className="dashtable dashbox">
            <h4>Custom Stocks</h4>
            <table>
              <thead>
                <th>Stock Name</th>
                <th>Symbol</th>
                <th>Score</th>
                <th>High</th>
                <th>Low</th>
                <th>Change %</th>
                <th>Actions</th>
              </thead>
              <tbody>
                {stockstablerow}
              </tbody>
            </table>
          </div>
        </div>
        <div className="homeside"> 
          <Calendars />
          <div className="statusbox dashbox">
            <div className="iconcont">
              <i className="fal fa-rocket-launch"></i>
              <h4>Stocks Watched<span>{myuser.stockslist&&myuser.stockslist.length}</span></h4>
            </div>
            <div className="view"><Link to=""><i className="far fa-angle-right"></i></Link></div>
          </div>
          <div className="statusbox dashbox"> 
            <div className="iconcont">
              <i className="fal fa-tasks"></i>
              <h4>Stocks Rising<span>13</span></h4>
            </div>
            <div className="view"><Link to=""><i className="far fa-angle-right"></i></Link></div>
          </div>
          <div className="statusbox dashbox">
            <div className="iconcont">
              <i className="fal fa-user-friends"></i>
              <h4>Stocks Falling<span>8</span></h4>
            </div>
            <div className="view"><Link to=""><i className="far fa-angle-right"></i></Link></div>
          </div> 
          <div className="updatesbox dashbox">
            <h5>Updates</h5>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home