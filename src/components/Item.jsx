import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

function Item({ item }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Mas info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
