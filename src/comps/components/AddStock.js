import React, { useContext, useState, useEffect } from 'react'
import '../styles/AddStock.css'
import {StoreContext} from '../StoreContext'
import {AppInput} from '../utils/AppInputs'
import {db} from '../utils/Fire'
import firebase from 'firebase'

export default function AddStock(props) {

  const {showAdder, setShowAdder, myuser, editData, editMode} = useContext(StoreContext)

  const [name, setName] = useState(editData.name)
  const [symbol, setSymbol] = useState(editData.symbol)
  const [score, setScore] = useState(editData.score)
  const [high, setHigh] = useState(editData.high)
  const [low, setLow] = useState(editData.low)
  const [change, setChange] = useState(editData.change)
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
    if(editMode) {
      myuser.customstocks.forEach(el => {
        if(el.symbol===symbol) {
          let itemindex = myuser.customstocks.indexOf(el)
          myuser.customstocks[itemindex] = stockObj
        }
      })
    }
    else {
      myuser.customstocks.push(stockObj)
    }
    db.collection('users').doc(user.uid).update({
      userinfo: myuser
    }).then(res => {
      setShowAdder(prev => !prev)
    })
  }
  function fillEditData() {
    setName(editData.name)
    setSymbol(editData.symbol)
    setScore(editData.score)
    setHigh(editData.high)
    setLow(editData.low)
    setChange(editData.change)
  }
  function clearData() {
    setName('')
    setSymbol('')
    setScore('')
    setHigh('')
    setLow('')
    setChange('')
  }
 
  useEffect(() => {
     editMode?fillEditData():clearData()
  },[editMode])

  return (
    <div className="addstockcover" style={showAdder?{visibility:'visible',opacity:1}:{}}>
      <div className="addstockcont" style={{top: showAdder?"0":"40px"}}>
        <i className="fal fa-times" onClick={() => setShowAdder(prev => !prev)}></i>
        <h4><i className="far fa-chart-line"></i>{editMode?"Edit Stock":"Create A Stock"}</h4>
        <div>
          <AppInput title="Stock Name" onChange={(e) => setName(e.target.value)} value={name} />
          <AppInput title="Symbol" onChange={(e) => setSymbol(e.target.value)} value={symbol} />
          <AppInput title="Current Score" type="number" onChange={(e) => setScore(e.target.value)} value={score} />
          <AppInput title="High" type="number" onChange={(e) => setHigh(e.target.value)} value={high} />
          <AppInput title="Low" type="number" onChange={(e) => setLow(e.target.value)} value={low} />
          <AppInput title="Percent Change" type="number" onChange={(e) => setChange(e.target.value)} value={change} />
        </div>
        <button onClick={() => addAStock()}>{editMode?"Save Stock":"Create Stock"}</button>
      </div>
    </div>
  ) 
}