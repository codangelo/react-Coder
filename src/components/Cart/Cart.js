import { useCartContext } from '../CartContext/CartContext'
import { Link } from "react-router-dom";

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
                {cartList.map(item =>
                    <div key={item.itemDetail.id} >
                        <img src={item.itemDetail.img} alt=""/>
                        <div>
                            <h3>{item.itemDetail.title}</h3>
                            <h4>{item.itemDetail.description}</h4>
                            <h4>$ {item.itemDetail.precio}</h4>
                            <h4>Cantidad: {item.cant}</h4>
                        </div>
                        <div>
                            <button className="remove" onClick={() => eliminarItem(item.itemDetail.id)}>Eliminar producto</button>
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
