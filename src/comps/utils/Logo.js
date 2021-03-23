import React from 'react'

export default function Logo(props) {
  
  const {width=50, fontSize='17px', color='#111'} = props

  const logostyles = {
      color,
      fontSize,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
      fontWeight: '600',
      marginBottom: '40px',
    }   
 
  return (
    <h4 style={logostyles} className="mainlogo">
      <img 
        style={{width}} 
        src={color==='#fff'?"https://i.imgur.com/8g7NedK.png":"https://i.imgur.com/sRQSgBc.png"} 
        alt=""
      />
      <span>Stockify</span>
    </h4>
  )
}