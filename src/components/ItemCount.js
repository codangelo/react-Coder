import { useState } from 'react'
import {Button,Badge} from 'react-bootstrap';


export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial)

    function sumar() {
        setCount(count + 1)
    }

    function restar() {
        setCount(count - 1)
    }

    return (
        <div className="contador">
            <Button className="elementoContador" onClick={restar} disabled={count < 1}>-</Button>
            <h3 className="elementoContador">Cantidad  <Badge bg="secondary">{count}</Badge></h3>
            <Button className="elementoContador" onClick={sumar} disabled={count === stock}>+</Button>
            <Button className="elementoContador" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    )

}

export default ItemCount

