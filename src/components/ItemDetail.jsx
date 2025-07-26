import { Container, Row, Col } from "react-bootstrap"
import Counter from "./Counter"

function ItemDetail ({ item }) {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <img src={item?.image} alt={item?.name} className= "item-detail-img"/>
                </Col>
                <Col>
                    <h2>{item?.name}</h2>
                    <p>{item?.description}</p>
                    <p>${item?.price}</p>
                    <Counter item={item} />
                </Col>
            </Row>
        </Container>
    )

}

export default ItemDetail