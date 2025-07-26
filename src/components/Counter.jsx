import { useState, useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"


function Counter ({ item }) {
    const [counter, setCounter] = useState(0)
    const { addToCart } = useContext(CartContext)


    const handlePlus = () => setCounter(counter + 1)
    const handleRest = () => {
        if (counter > 0) { 
            setCounter(counter - 1)
        }
    }
    const handleAddToCart = () => addToCart({...item, quantity: counter})


    return (
        <div className="d-flex gap-3 align-items-center">
            <Button variant="outline-dark" onClick={handleRest} > - </Button>
            <p className="m-0">{counter}</p>
            <Button variant="outline-dark" onClick={handlePlus} > + </Button>
            <Button variant="outline-dark" onClick={handleAddToCart} disabled={counter === 0} > Agregar al carrito </Button>
        </div>
    )
}

export default Counter