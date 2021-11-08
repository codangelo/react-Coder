import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ item }) => {

    return (
        <div className="item">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Link to={`/producto/${item.id}`}><Button className="verMas">Ver mas</Button></Link>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Item
