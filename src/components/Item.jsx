import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Item ({ item }) {
    return (                
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.thumbnail} />
    <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Button variant="primary">Mas info</Button>
    </Card.Body>
    </Card>
    )
}

export default Item