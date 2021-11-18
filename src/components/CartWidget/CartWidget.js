import { BsBasket } from 'react-icons/bs'
import './CartWidget.css'
import { useCartContext } from '../CartContext/CartContext'
import { Badge } from 'react-bootstrap'


export function CartWidget() {
    let { itemCant } = useCartContext()

    return (
        <>
        <button className="navbar-cart"><BsBasket /></button>
        <Badge pill bg="danger">
            {itemCant}
        </Badge>{''}
        </>
    )
}

export default CartWidget