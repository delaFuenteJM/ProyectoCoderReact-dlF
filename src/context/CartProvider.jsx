import { CartContext } from "./CartContext"
import { useState } from "react"

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])


const addToCart = (productToAdd) => { 
    const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

    if (existingProductIndex > -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += productToAdd.quantity;
        setCart(updatedCart);
    } else {
        setCart([...cart, productToAdd]);
    }
}

const getQuantity = () => {
    const quantities = cart.map(produc => produc.quantity)
    const total = quantities.reduce((acc, current) => acc + current, 0)

    return total
}

const removeItem = (idToRemove) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== idToRemove));
};

const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
}

return(
    <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotalPrice, removeItem}} >
        {children}
    </CartContext.Provider>
)
}

export default CartProvider