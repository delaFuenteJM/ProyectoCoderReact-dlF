import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MujuNavbar from "./components/MujuNavbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <MujuNavbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:slug" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
