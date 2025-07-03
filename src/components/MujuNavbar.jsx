import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

function MujuNavbar() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener categorías");
        return res.json();
      })
      .then((data) => {
        console.log("📦 Categorías desde la API:", data);
        setCategorias(data);
      })
      .catch((err) => {
        console.error("Error al cargar categorías:", err);
        setCategorias([]); 
      });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Muju</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <Nav.Link
                  as={Link}
                  to={`/category/${cat.slug}`} 
                  key={cat.slug}               
                >
                  {cat.name} {}
                </Nav.Link>
              ))
            ) : (
              <span>Cargando categorías...</span>
            )}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MujuNavbar;

