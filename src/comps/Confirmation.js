import React, { useContext, useEffect, useState } from 'react'
import { AppInput, AppSelect } from './AppInputs'
import ConfirmationTable from './ConfirmationTable'
import { StoreContext } from './StoreContext'
import './styles/Confirmation.css'

export default function Confirmation() {

  const {setStatusBar} = useContext(StoreContext)
  const [grouper, setGrouper] = useState('journee')
  const [afficher, setAfficher] = useState('tous')

  useEffect(() => {
    setStatusBar({title: 'Confirmation du Temps'})
  },[])

  return (
    <div className="confirmationpage">
      <div className="confirmationheader">
        <div>
          <AppInput title="De:" type="date"/>
          <AppInput title="À:" type="date"/>
        </div>  
        <div>
          <AppSelect 
            title="Grouper par:" 
            onChange={(e) => setGrouper(e.target.value)} 
            value={grouper} 
            options={[{name:'Aucun'},{name:'Journee'},{name:'Compagnie'}]}
          /> 
          <AppSelect 
            title="Afficher:" 
            onChange={(e) => setAfficher(e.target.value)} 
            value={afficher} 
            options={[{name:'Tous'},{name:'Approuver'},{name:'Non-approuver'}]}
          />
        </div>
      </div>
      <ConfirmationTable grouperfilter={grouper} afficherfilter={afficher} />
      <div className="spacer"></div>
    </div>
  )
} 