import { Button, Form } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { serverTimestamp } from "firebase/firestore"
import { createOrden } from "../firebase/db"

function Checkout() {
    const { cart } = useContext(CartContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const orden = {
            user: { email, name, phone},
            items: cart,
            time: serverTimestamp()
        }

        createOrden(orden)
    }


  return (
    <div className="d-flex justify-conten.center mt-5">
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre completo" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="tel" placeholder="+54 9 11 1234 5678" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
