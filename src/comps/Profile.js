import React from 'react'
import './styles/ProfilContent.css'
import {AppInput} from './AppInputs'

export default function ParamProfil() {

  return (
    <div className="profilcontent"> 
      <h4>Account</h4>
      <div className="profilgrid">
        <AppInput title="First Name" value="Bjorn"/>
        <AppInput title="Last Name" value="Ironside"/>
        <AppInput title="Email" value="bironside@stockify.com"/>
        <AppInput title="Phone" value="514-555-9999"/>
        <AppInput title="Company" value="Stockify Ltd."/>
        <AppInput title="Job Title" value="App Developer"/>
        <AppInput title="Date Joined" type="date" value="2021-01-01"/>
        <AppInput title="Password" type="password"/>
        <AppInput title="Password (confirmation)" type="password"/>
        <button>Save</button>
      </div>
    </div>
  )
}