import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [itemCant, setItemCant] = useState(0);

    const agregarAlCarrito = item => {
        setItemCant(itemCant + item.cant)
        setCartTotal(cartTotal + (item.itemDetail.precio * item.cant))
        const buscaItem = cartList.find(itemCarrito => itemCarrito.itemDetail.id === item.itemDetail.id)       
        if (buscaItem) {
            buscaItem.cant = buscaItem.cant + item.cant
        }
        else {
            setCartList(itemsAdded => [...itemsAdded, item])

        }
    }

    const eliminarItem = idItemQuitar => {
        const itemQuitar = cartList.find(itemCarrito => itemCarrito.itemDetail.id === itemQuitar)
        setItemCant(itemCant - itemQuitar.cant)
        setCartTotal(cartTotal - (itemQuitar.itemDetail.price * itemQuitar.cant))
        setCartList(cartList.filter(prod => prod.itemDetail.id !== idItemQuitar))
    }

    const emptyCart = () => {
        setItemCant(0)
        setCartTotal (0)
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito, eliminarItem, emptyCart, itemCant, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider