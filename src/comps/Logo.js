import React from 'react'

export default function Logo(props) {
  
  const {width='50px', fontSize='17px', color='#111'} = props

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
  const logoimg = {
    width
  }    
 
  return (
    <h4 style={logostyles} className="mainlogo">
      <img 
        style={logoimg} 
        src="https://i.imgur.com/8g7NedK.png" 
        alt=""
      />
      <span>Stockify</span>
    </h4>
  )
}