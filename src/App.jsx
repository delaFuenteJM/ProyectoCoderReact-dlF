import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MujuNavbar from "./components/MujuNavbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <MujuNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:slug" element={<ItemListContainer />} />
        {/* Podés agregar un 404 más adelante */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

