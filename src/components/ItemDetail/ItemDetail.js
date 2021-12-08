import ItemCount from '../ItemCount/ItemCount'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useCartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import './itemDetail.css'

const ItemDetail = ({ itemDetail }) => {

    const [cant, setCant] = useState(1)
    const { agregarAlCarrito } = useCartContext()
    const [habilitarBoton, setHabilitarBoton] = useState(false);


    const onAdd = (count) => {
        setCant(count)
        agregarAlCarrito({ itemDetail, cantidad: count })
        setHabilitarBoton(true)

    }

    return (
        <div className="itemDetail">
            <Card style={{ width: '500px' }}>
                <Card.Img variant="top" src={itemDetail.img} />
                <Card.Body>
                    <Card.Title>{itemDetail.titulo}</Card.Title>
                    <Card.Text>{itemDetail.precio}</Card.Text>
                    <Card.Text>{itemDetail.descripcion}</Card.Text>
                    {habilitarBoton
                        ? <Link to="/carrito"><Button className="botonItem">Finalizar compra</Button></Link>
                        : <ItemCount stock={itemDetail.stock} initial={cant} onAdd={onAdd} />
                    }
                    <Link to="/"><Button className="botonItem">Volver al listado</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
