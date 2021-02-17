import React, { useContext, useEffect, useState } from 'react'
import StockCard from './StockCard'
import { StoreContext } from './StoreContext'
import './styles/Home.css'

export default function Accueil() {

  const {collection} = useContext(StoreContext)
  const [daytime, setDayTime] = useState('')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const thedate = new Date().toLocaleDateString('en', options)

  const stocksrow = collection && collection.map(el => {
    return <StockCard el={el[0].quotes[0]}/>
  })
  console.log(collection)

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
    <div className="accueilpage">
      <h3>{daytime} Uriel</h3>
      <small style={{color:'#aaa',textTransform:'capitalize'}}>{thedate}</small> 
      <div className="spacerl"></div>
      {stocksrow}
    </div>
  )
} 