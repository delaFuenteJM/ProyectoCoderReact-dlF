import { ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { useNavigate } from "react-router"

function Cart () {
const { cart, getTotalPrice, removeItem } = useContext(CartContext)
const navigate = useNavigate()
const total = getTotalPrice()

    if (cart.length === 0) {
        return (
            <h2> El carrito esta vacio!!</h2>
        )
    }

    return (
        <div className="d-flex flex-column justify-content-center aling-items-center gap-5">
            <ListGroup >
                {cart.map(prod => (
                <ListGroupItem key={prod.id} className="d-flex justify-content-between">
                    {prod.name} x {prod.quantity}
                    <Button variant="danger" onClick={() => removeItem(prod.id)} >Eliminar</Button>
                </ListGroupItem>
                ))}
            </ListGroup>
            <h2> Total: ${total}</h2>
            <button onClick={() => navigate("/checkout")} >Terminar compra</button>
        </div>
    )
}

export default Cart