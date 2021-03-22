import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom"
import Calendars from './Calendars'
import Charts from "./Chart"
import StockCard from './StockCard'
import { StoreContext } from './StoreContext'
import './styles/Home.css'

function Home() {

  const {collection} = useContext(StoreContext)
  const [daytime, setDayTime] = useState('')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const thedate = new Date().toLocaleDateString('en', options)
  const history = useHistory()

  const stocksrow = collection && collection.map(el => {
    return <StockCard el={el[0].quotes[0]}/>
  })

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
          <h4>{daytime} Bjorn</h4>
          <h5>{thedate}</h5>
        </div>
        <button><i class="fal fa-chart-line"></i><span>Add Stock</span></button>
      </div>
      <div className="stocksrow">
        {stocksrow}
      </div>
      <div className="homegrid">
        <div className="homemain">
          <div className="dashgraph dashbox">
            <Charts type="bar-chart" /> 
          </div>
        </div>
        <div className="homeside"> 
          <Calendars />
          <div className="statusbox dashbox">
            <div className="iconcont">
              <i className="fal fa-rocket-launch"></i>
              <h4>Stocks Watched<span>0</span></h4>
            </div>
            <div className="view"><Link to=""><i className="far fa-angle-right"></i></Link></div>
          </div>
          <div className="statusbox dashbox"> 
            <div className="iconcont">
              <i className="fal fa-tasks"></i>
              <h4>Stocks Rising<span>0</span></h4>
            </div>
            <div className="view"><Link to=""><i className="far fa-angle-right"></i></Link></div>
          </div>
          <div className="statusbox dashbox">
            <div className="iconcont">
              <i className="fal fa-user-friends"></i>
              <h4>Stocks Falling<span>0</span></h4>
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