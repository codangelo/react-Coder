import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'
import { useState } from 'react'
import { useCartContext } from '../CartContext/CartContext'
import {Link} from 'react-router-dom'


const ItemDetail = ({ itemDetail }) => {
    const [cant, setCant] = useState(1)
    const { cartList, mostrarListado, agregarAlCarrito } = useCartContext()
    let [habilitarBoton, setHabilitarBoton] = useState(false);


    console.log(cartList, 'Cartlist 1')
    console.log(mostrarListado, 'Mostrarnlistado 1')
    console.log(agregarAlCarrito, 'agregaralcarrito 1')

    const onAdd = (count) => {
        setCant(count)
        agregarAlCarrito({ itemDetail, cantidad: cant })
        alert(`Se agregaron ${count} unidades al carrito`)
        console.log(cartList, 'onadd')
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
                        ? <Link to="/cart"><button className="contadorAgregar">Finalizar compra</button></Link>
                        : <ItemCount stock={itemDetail.stock} initial={cant} onAdd={onAdd} />
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
