import React from 'react'
import './styles/AppInputs.css'

export function AppInput(props) {
  const {title,formatclass='',iconclass,padright,padleft,inpRef,onFocus,placeholder,type,value,onChange,name,checked,disabled,onKeyUp,step,min,max} = props
  return ( 
    <label className={`labelinput appinput ${formatclass}`}>
      <h5>{title}</h5>
      <div>
        <span className="iconcont"><i className={iconclass}></i> </span>
        <input style={{paddingRight: padright, paddingLeft: padleft}} ref={inpRef} onFocus={() => onFocus&&onFocus()} placeholder={placeholder} type={type} value={value} onChange={(e) => onChange&&onChange(e)} name={name} checked={checked} disabled={disabled} onKeyUp={(e) => onKeyUp&&onKeyUp(e)} step={step} min={min} max={max}/>
      </div>
    </label>
  )   
}  
  
export function AppSelect(props) {
  const {options,title,value,onChange} = props
  let optionsdata = options && options.map((data) =>
    <option key={data.id} value={data.value?data.value.toLowerCase():data.name.toLowerCase()} disabled={data.disabled} selected={data.selected}>   
        {data.name}
    </option>
  )  
  return ( 
    <label className="appselect">
      <h5>{title}</h5>
      <select onChange={(e) => onChange(e)} value={value}>
        {optionsdata}
      </select>
    </label>
  )
} 
 
export function AppSwitch(props) { 
  const {iconclass,title,onChange,checked} = props
  return (   
    <div className="switchdiv">  
    <h6><i className={iconclass}></i>{title}</h6>    
    <label className="form-switch">
      <input type="checkbox" onChange={(e) => onChange(e)} checked={checked}/>
      <i></i> 
    </label>  
    </div>
  )  
} 

