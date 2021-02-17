import AppContainer from "./comps/AppContainer"
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import StoreContextProvider from './comps/StoreContext'
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          <AppContainer />
        </Router>
      </StoreContextProvider>
    </div>
  );
}
