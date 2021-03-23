import React, { useContext } from 'react'
import MainContent from './MainContent'
import Sidebar from './components/Sidebar'
import { StoreContext } from './StoreContext'
import './styles/HomeCont.css'

export default function HomeContainer(props) {

  const {foldside, darkmode} = useContext(StoreContext)
  const {handleLogout} = props

  return (
    <div className={darkmode?foldside?"homecont homecontfolded darkcont":"homecont darkcont":foldside?"homecont homecontfolded":"homecont"}>
      <Sidebar handleLogout={handleLogout}/>
      <MainContent />
    </div>
  )
} 