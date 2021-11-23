import { useCartContext } from '../CartContext/CartContext'
import { Link } from "react-router-dom";
import 'firebase/firestore';



const Cart = () => {

    const { cartList, eliminarItem, emptyCart, cartTotal } = useCartContext()

    return (
        <div>
            {cartList.length
                ? <button className="emptyCart" onClick={() => emptyCart()}>Vaciar carrito</button>
                : <div>
                    <h3 className="emptyCart">No hay articulos en tu carrito</h3>
                    <Link className="home" to="/">Menú principal</Link>
                </div>
            }
            <div>
                {cartList.map(items =>
                    <div key={items.id} >
                        <img src={items.img} alt=""/>
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
            </div>
        </div>
    )
}

export default Cart
