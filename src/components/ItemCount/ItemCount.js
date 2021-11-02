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

    return (
        <>
        <div className="contador">
            <Button className="contadorBoton" onClick={restar} disabled={count < 1}>-</Button>
            <h3 className="contadorCantidad">{count}</h3>
            <Button className="contadorBoton" onClick={sumar} disabled={count === parseInt(stock)}>+</Button>
        </div>
        <Button className="contadorAgregar" onClick={() => onAdd(count)}>Agregar</Button>
        </>

    )

}

export default ItemCount

