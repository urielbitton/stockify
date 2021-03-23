import React, { useContext, useState } from 'react'
import '../styles/AddStock.css'
import {StoreContext} from '../StoreContext'
import {AppInput} from '../utils/AppInputs'
import {db} from '../utils/Fire'
import firebase from 'firebase'

export default function AddStock() {

  const {showAdder, setShowAdder, myuser} = useContext(StoreContext)
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [score, setScore] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')
  const [change, setChange] = useState('')
  const user = firebase.auth().currentUser

  function addAStock() {
    const stockObj = {
      name,
      symbol,
      score,
      high,
      low,
      change
    }
    myuser.customstocks.push(stockObj)
    db.collection('users').doc(user.uid).update({
      userinfo: myuser
    }).then(res => {
      setShowAdder(prev => !prev)
    })
  }

  return (
    <div className="addstockcover" style={showAdder?{visibility:'visible',opacity:1}:{}} onClick={() => setShowAdder(prev => !prev)}>
      <div className="addstockcont" style={{top: showAdder?"0":"40px"}} onClick={(e) => e.stopPropagation()}>
        <i className="fal fa-times" onClick={() => setShowAdder(prev => !prev)}></i>
        <h4><i className="far fa-chart-line"></i>Create A Stock</h4>
        <div>
          <AppInput title="Stock Name" onChange={(e) => setName(e.target.value)}/>
          <AppInput title="Symbol" onChange={(e) => setSymbol(e.target.value)}/>
          <AppInput title="Current Score" type="number" onChange={(e) => setScore(e.target.value)}/>
          <AppInput title="High" type="number" onChange={(e) => setHigh(e.target.value)}/>
          <AppInput title="Low" type="number" onChange={(e) => setLow(e.target.value)}/>
          <AppInput title="Percent Change" type="number" onChange={(e) => setChange(e.target.value)}/>
        </div>
        <button onClick={() => addAStock()}>Create Stock</button>
      </div>
    </div>
  ) 
}