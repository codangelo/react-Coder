import { useCartContext } from '../CartContext/CartContext'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { getFirestore } from '../../services/GetFirestore';
import firebase from 'firebase';
import 'firebase/firestore';
import Form from '../Form/Form'
import './cart.css'
import { Button } from 'react-bootstrap';




const Cart = () => {
    const [orderId, setOrderId] = useState("");
    const { cartList, eliminarItem, emptyCart, cartTotal, userData } = useCartContext()

    const createOrder = () => {

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userData;
        order.total = cartTotal;
        order.items = cartList.map(cartList => {
            const id = cartList.id;
            const titulo = cartList.titulo;
            const subtotal = cartList.precio * cartList.cantidad;
            const totalCant = cartList.cantidad
            return { id, titulo, totalCant, subtotal }
        })

        const dbQuery = getFirestore()

        dbQuery.collection('orders').add(order)
            .then(res => setOrderId(res.id))
            .catch(error => alert("Error:", error))
            .finally(() => emptyCart())

        const itemsToUpdate = dbQuery.collection('items').where
            (firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))

        const batch = dbQuery.batch();

        itemsToUpdate.get()
            .then(res => {
                res.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })

                batch.commit()
                    .catch(error => alert("Error:", error))
            })
    }

    return (
        <div className="contenedorCarrito">
            {cartList.length
                ? <Button className="botonCarrito" onClick={() => emptyCart()}>Vaciar carrito</Button>
                : orderId === ""
                    ? <div>
                        <p className="textoCarrito">El carrito está vacío</p>
                        <Button className="botonCarrito"><Link className="inicio" to="/"> Ir al inicio</Link></Button>
                    </div>
                    : <div>
                        <p className="textoCarrito">¡Gracias por tu compra!</p>
                        <p className="idOrden">Tu código de operación es: {orderId}</p>
                        <Button className="botonCarrito"><Link className="inicio" to="/"> Ir al inicio</Link></Button>
                    </div>
            }
            <div className={cartList.length ? "cartListFull" : "cartListEmpty"}>
                {cartList.map(items =>
                    <div className="itemCarrito" key={items.id} >
                        <img className="itemCarritoImg" src={items.img} alt="" />
                        <div>
                            <h3 className="itemCarritoTitulo">{items.titulo}</h3>
                            <h4 className="itemCarritoDesc">{items.description}</h4>
                            <h4 className="itemCarritoPrecio">$ {items.precio}</h4>
                            <h4 className="itemCarritoCant">Cantidad: {items.cantidad}</h4>
                        </div>
                        <div>
                            <Button className="botonCarrito" onClick={() => eliminarItem(items.id)}>Eliminar producto</Button>
                        </div>

                    </div>

                )}

                <div>
                    <p className="cart">Total de la compra: {cartTotal}</p>
                    <Form createOrder={createOrder} />
                </div>
            </div>

        </div>
    )
}

export default Cart
