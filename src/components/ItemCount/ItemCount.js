import { useState } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css'


export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial)


    return (
        <>

            <div className="contador">
                <Button className="contadorBoton" onClick={() => setCount(count - 1)} disabled={count < 1}>-</Button>
                <h3 className="contadorCantidad">{count}</h3>
                <Button className="contadorBoton" onClick={() => setCount(count + 1)} disabled={count === stock}>+</Button>
            </div>
            <button className="contadorAgregar" onClick={() => {
                onAdd(count);
            }}>Agregar al carrito</button>

        </>

    )

}

export default ItemCount