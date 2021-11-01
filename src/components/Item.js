import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Item = ({item}) => {

    return (
        <div className="item">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Link to={`/producto/${item.id}`}><button className="verMas">Ver mas</button></Link>
                    <ItemCount stock={item.stock} initial={1} />
                </Card.Body>
            </Card>
        </div>

    )
}

export default Item
