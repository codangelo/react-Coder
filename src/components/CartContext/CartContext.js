import {createContext, useContext, useState} from 'react';

const CartContext = createContext();

console.log(CartContext)

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [itemCant, setItemCant] = useState(0);
    const [userData, setUserData] = useState({name:"", surname:"", phone:"", email:""});


    const mostrarListado = () =>{
        console.log(cartList)
        console.log("subtotal", cartTotal)
        console.log("total items",itemCant)
    }

    function agregarAlCarrito(items) {
        const cartListElements = [...cartList]
        setCartTotal(cartTotal + (items.itemDetail.precio * items.cantidad))
        setItemCant(itemCant + (items.cantidad))
        if(cartListElements.find((e) => e.id ===items.itemDetail.id) !== undefined){
            cartListElements.find((e) => e.id ===items.itemDetail.id).cantidad += items.cantidad
            setCartList(cartListElements)
        }
        else{
            setCartList([...cartList, {...items.itemDetail, cantidad: items.cantidad}])
        }
        
    }
    mostrarListado()

    function eliminarItem(id) {
        const itemDeleted = cartList.find(e => e.id === id)
        setItemCant(itemCant - itemDeleted.cantidad)
        setCartTotal(cartTotal - (itemDeleted.precio * itemDeleted.cantidad))
        setCartList(cartList.splice(e => e.id !== itemDeleted))
        setCartList([...cartList,id])

    }

    const emptyCart = () => {
        setItemCant(0)
        setCartTotal (0)
        setCartList([])
    }

    const handleForm = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        })
    }


    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            eliminarItem,
            emptyCart,
            itemCant,
            cartTotal,
            handleForm,
            userData}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider