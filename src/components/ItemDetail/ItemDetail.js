import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'
import {useState} from 'react'


const ItemDetail = ({itemDetail}) => {
    const [cant, setCant] = useState(1)

    const onAdd = (count) => {
        setCant(count)
        alert(`Se agregaron ${count} unidades al carrito`)
    }

    return (
        <div className="itemDetail">
            <Card style={{ width: '500px' }}>
                <Card.Img variant="top" src={itemDetail.img} />
                <Card.Body>
                    <Card.Title>{itemDetail.titulo}</Card.Title>
                    <Card.Text>{itemDetail.precio}</Card.Text>
                    <Card.Text>{itemDetail.descripcion}</Card.Text>
                    <ItemCount stock={itemDetail.stock} initial={cant} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail

