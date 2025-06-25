import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"
import { useState, useEffect } from 'react'
import { Link } from "react-router"

function NavBar (){

useEffect(() => {
    
}, [])

return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Muju</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="categorias" id="basic-nav-dropdown">
            {categories.map (cat => (
                <NavDropdown.Item as={Link} to={`/category/${cat}`}>{cat}
                </NavDropdown.Item>
            ))}
            </NavDropdown>
          </Nav>

          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>

);
}

export default NavBar;