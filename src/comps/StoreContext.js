import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
 
  const [darkmode, setDarkmode] = useState(false)
  const [foldside, setFoldSide] = useState(false)
  const [themecolor, setThemeColor] = useState('#601cff')
  const [showSidebar, setShowSidebar] = useState(false)
  const [collection, setCollection] = useState([])
  let stocksList = ['tesla','google','facebook','amazon','apple']
 
 
  useEffect(() => {
    stocksList && stocksList.forEach(el => {
      let options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: {q: el, region: 'US'},
        headers: {
          'x-rapidapi-key': '8dfca300dbmshc9db1bd89959686p130e19jsneb01c198116e',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      }
      axios.request(options).then((res) => {
        setCollection(prev => [...prev,[res.data]])
      })
    })
  },[])
 
  return (
    <StoreContext.Provider value={{darkmode, setDarkmode, foldside, setFoldSide, 
      themecolor, setThemeColor, showSidebar, setShowSidebar, collection, setCollection
    }}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider