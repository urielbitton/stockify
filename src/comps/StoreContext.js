import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import {db} from './utils/Fire'
import firebase from 'firebase'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
 
  const user = firebase.auth().currentUser
  const [darkmode, setDarkmode] = useState(false)
  const [foldside, setFoldSide] = useState(false)
  const [themecolor, setThemeColor] = useState('#601cff')
  const [showSidebar, setShowSidebar] = useState(false)
  const [collection, setCollection] = useState([])
  const [myuser, setMyUser] = useState([])
  const [stocksList, setStocksList] = useState([]) 
  const stocks = ['google','facebook','apple','tesla','amazon','microsoft']
  const [stocksBox, setStocksBox] = useState([])
  const [stocksarr, setStocksArr] = useState([])
  const [showAdder, setShowAdder] = useState(false)
  const [editData, setEditData] = useState({})
  const [editMode, setEditMode] = useState(false)
 
  useEffect(() => {
    user&&db.collection('users').doc(user.uid).onSnapshot(snap => {
      setMyUser(snap.data().userinfo)  
    }) 
  },[user])  
  useEffect(() => {
    stocks && stocks.forEach(el => {
      let options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: {q: el, region: 'US'},
        headers: {
          'x-rapidapi-key': '9e79f39a30msh8c410c0a2eed685p10b1f2jsnf1dd4e8a551b',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      } 
      axios.request(options).then((res) => {
        setStocksBox(prev => [...prev,[res.data]])
        setCollection(prev => [...prev,[res.data]])
      })
    })
  },[])
 
  return (
    <StoreContext.Provider value={{darkmode, setDarkmode, foldside, setFoldSide, 
      themecolor, setThemeColor, showSidebar, setShowSidebar, collection, setCollection,
      myuser, setMyUser, stocksList, setStocksList, stocksBox, stocksarr, setStocksArr,
      showAdder, setShowAdder, editData, setEditData, editMode, setEditMode
    }}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider