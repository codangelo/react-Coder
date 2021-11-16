import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [itemCant, setItemCant] = useState(0);

    const agregarAlCarrito = item => {
        setItemCant(parseInt(itemCant + item.cant))
        setCartTotal(parseInt(cartTotal + (item.itemDetail.precio * item.cant)))
        const findItem = cartList.find(itemCart => itemCart.itemDetail.id === item.itemDetail.id)        
        if (findItem) {
            findItem.cant = findItem.cant + item.cant
            setCartList(cartList)
        }
        else {
            setCartList(itemsAdded => [...itemsAdded, item])
        }
    }

    const eliminarItem = idItemQuitar => {
        const itemRemove = cartList.find(itemCart => itemCart.itemDetail.id === idItemQuitar)
        setItemCant(parseInt(itemCant - itemRemove.cant))
        setCartTotal(parseInt(cartTotal - (itemRemove.itemDetail.price * itemRemove.cant)))
        setCartList(cartList.filter(itemSearched => itemSearched.itemDetail.id !== idItemQuitar))
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