import { Container, Row } from "react-bootstrap";
import Item from "./Item";

function ItemList({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-center mt-4">Cargando productos...</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
