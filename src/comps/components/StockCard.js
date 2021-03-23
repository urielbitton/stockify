import React from 'react'
import '../styles/StockCard.css'
import thousSep from '../utils/ThousSep'

export default function StockCard(props) {

  const {longname, score, symbol, typeDisp} = props.el

  return (
    <div className="stockcard">
      <div className="left">
        <h4>{longname}</h4>
        <small><i className="fal fa-chart-line"></i>{thousSep(score)}</small>
      </div>
      <div className="right">
        <h6><i className="far fa-arrow-up"></i></h6>
        <h5>{symbol}</h5>
      </div>
    </div>
  )
}