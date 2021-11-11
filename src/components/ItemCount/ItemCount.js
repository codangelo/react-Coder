import { useState } from 'react'
import {Button} from 'react-bootstrap';
import './ItemCount.css'


export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial)

    function sumar() {
        setCount(count + 1)
    }

    function restar() {
        setCount(count - 1)
    }

    function agregar(){
        onAdd(count)
    }
    
    return (
        <>
        
        <div className="contador">
            <Button className="contadorBoton" onClick={restar} disabled={count < 1}>-</Button>
            <h3 className="contadorCantidad">{count}</h3>
            <Button className="contadorBoton" onClick={sumar} disabled={count === parseInt(stock)}>+</Button>
        </div>
        <button className="contadorAgregar" onClick={agregar}>Agregar al carrito</button>
        
        </>

    )

}

export default ItemCount