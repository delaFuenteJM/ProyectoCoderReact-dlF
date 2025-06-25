import './App.css'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route  } from "react-router";

function App() {
  return (
    //fracment <>
    <BrowserRouter> 
    <NavBar/>
    <ItemListContainer/>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
