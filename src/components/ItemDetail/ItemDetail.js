import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'


const ItemDetail = ({itemDetail}) => {
    return (
        <div className="itemDetail">
            <Card style={{ width: '500px' }}>
                <Card.Img variant="top" src={itemDetail.img} />
                <Card.Body>
                    <Card.Title>{itemDetail.titulo}</Card.Title>
                    <Card.Text>{itemDetail.precio}</Card.Text>
                    <Card.Text>{itemDetail.descripcion}</Card.Text>
                    <ItemCount stock={itemDetail.stock} initial={1} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail

