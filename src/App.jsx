import './App.css'

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
   return (
    //fracment <>
    <> 
    <Navbar link1={'decoracion'} link2= 'Velas' link3={'Coleccionables'} />
    <ItemListContainer text= 'Tienda de decoración y objetos únicos. Velas artesanales, piezas coleccionables y mucho mas!' />
    </>
  )
}

export default App
