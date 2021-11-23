import { useCartContext } from '../CartContext/CartContext'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { getFirestore } from '../../services/GetFirestore';
import firebase from 'firebase';
import 'firebase/firestore';
import Form from '../Form/Form'



const Cart = () => {
    const [orderId, setOrderId] = useState("");
    const { cartList, eliminarItem, emptyCart, cartTotal, userData } = useCartContext()

    const createOrder = (e) => {

        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userData;
        order.total = cartTotal;
        order.items = cartList.map(cartList => {
            const id = cartList.id;
            const titulo = cartList.titulo;
            const subtotal = cartList.precio * cartList.cantidad;
            return { id, titulo, subtotal }
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
        <div>
            {cartList.length
                ? <button className="remove-cart" onClick={() => emptyCart()}>Vaciar carrito</button>
                : orderId === ""
                    ? <div>
                        <p className="empty-cart">El carrito está vacío</p>
                        <Link className="go-to-home" to="/"> Ir al inicio</Link>
                    </div>
                    : <div>
                        <p className="empty-cart">¡Gracias por tu compra!</p>
                        <p className="order-id">Tu código de operación es: {orderId}</p>
                        <Link className="go-to-home" to="/"> Ir al inicio</Link>
                    </div>
            }
            <div>
                {cartList.map(items =>
                    <div key={items.id} >
                        <img src={items.img} alt="" />
                        <div>
                            <h3>{items.titulo}</h3>
                            <h4>{items.description}</h4>
                            <h4>$ {items.precio}</h4>
                            <h4>Cantidad: {items.cantidad}</h4>
                        </div>
                        <div>
                            <button className="remove" onClick={() => eliminarItem(items.id)}>Eliminar producto</button>
                        </div>
                    </div>
                )}
                <div>
                    <p className="cart">Total de la compra: {cartTotal}</p>
                </div>
                <Form createOrder={createOrder} />
            </div>
        </div>
    )
}

export default Cart
