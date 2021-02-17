import React from 'react'
import './styles/StockCard.css'

export default function StockCard(props) {

  const {longname, score, symbol, typeDisp} = props.el

  return (
    <div className="stockcard">
      <div className="left">
        <h4>{longname}</h4>
        <small><i className="fal fa-chart-line"></i>{score}</small>
      </div>
      <div className="right">
        <h5>{symbol}</h5>
        <h6>{score}</h6>
      </div>
    </div>
  )
}