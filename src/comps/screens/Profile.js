import React, { useContext, useState } from 'react'
import { StoreContext } from '../StoreContext'
import '../styles/Profile.css'
import {AppInput} from '../utils/AppInputs'
import {db} from '../utils/Fire'
import firebase from 'firebase'
import thousSep from '../utils/ThousSep'

export default function ParamProfil() {

  const {myuser, stocksBox} = useContext(StoreContext)
  const [fullname, setFullName] = useState(myuser.fullname)
  const [email, setEmail] = useState(myuser.email)
  const [phone, setPhone] = useState(myuser.phone)
  const [company, setCompany] = useState(myuser.company)
  const [jobtitle, setJobTitle] = useState(myuser.jobtitle)
  const [password, setPassword] = useState(myuser.password)
  const [showPass, setShowPass] = useState(false)
  const user = firebase.auth().currentUser
   
  const stocksboxes = stocksBox && stocksBox.map(el => {
    return <div 
      className={myuser.stockslist.includes(el[0].quotes[0].symbol)?"stocksbox stocksboxactive":"stocksbox"} 
      onClick={() => selectStocks(el[0].quotes[0].symbol)}
      >
      <div>   
        <h4>{el[0].quotes[0].longname}</h4>
        <h5>{thousSep(el[0].quotes[0].score)}</h5>  
      </div> 
      <i className="fal fa-check-circle"></i>
    </div>  
  })
  const customstocksrow = myuser.customstocks && myuser.customstocks.map(el => {
    return <div className="stocksboxactive stocksbox">
      <div>   
        <h4>{el.name}</h4>
        <h5>{thousSep(el.score)}</h5>  
      </div> 
      <i className="fal fa-check-circle"></i>
    </div>  
  })
 
  function selectStocks(symbol) {
    if(!myuser.stockslist.includes(symbol)) {
      myuser.stockslist.push(symbol)
    } 
    else {
      myuser.stockslist && myuser.stockslist.forEach(el => {
        let itemindex = myuser.stockslist.indexOf(el)
        myuser.stockslist.splice(itemindex,1) 
      })
    }
    db.collection('users').doc(user.uid).update({
      userinfo: myuser
    })
  } 
  
  return (
    <div className="profilcontent"> 
      <h4>My Account</h4>
      <div className="profilgrid">
      <h4>Account Info</h4>
        <AppInput title="First Name" onChange={(e) => setFullName(e.target.value)} value={fullname} />
        <AppInput title="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <AppInput title="Phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
        <AppInput title="Company" onChange={(e) => setCompany(e.target.value)} value={company}/>
        <AppInput title="Job Title" onChange={(e) => setJobTitle(e.target.value)} value={jobtitle}/>
        <AppInput title="Date Joined" type="date" value="2021-03-02" disabled/>
        <div className="passwordcont">
          <AppInput title="Password" type={showPass?"text":"password"} disabled onChange={(e) => setPassword(e.target.value)} value={password}/>
          <i className={showPass?"far fa-eye-slash":"far fa-eye"} onClick={() => setShowPass(prev => !prev)}></i>
        </div>
        <h4>App Stocks</h4>
        <div className="stocksboxrow">
          {stocksboxes}
        </div>
        <h4>Custom Stocks</h4>
        <div className="stocksboxrow">
          {customstocksrow}
        </div>
        <button>Save</button>
      </div>
    </div>
  )
}