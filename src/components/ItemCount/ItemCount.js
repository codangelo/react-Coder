import { useState } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css'


export function ItemCount({ stock, initial, onAdd }) {
    let [count, setCount] = useState(initial)


    return (
        <>
            <div className="contador">
                <div className={stock === 0 ? "sinStock" : "conStock"}>
                    <div className="botonesContador">
                        <Button className="contadorBoton" onClick={() => setCount(count - 1)} disabled={count < 1}>-</Button>
                        <h3 className="contadorCantidad">{count}</h3>
                        <Button className="contadorBoton" onClick={() => setCount(count + 1)} disabled={count === stock}>+</Button>
                    </div>
                    <div>
                        <Button className="contadorAgregar" onClick={() => {
                            onAdd(count);
                        }}>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
            <div className={stock === 0 ? "conStock" : "avisoSinStock"}>
                <h3 className="leyendaSinStock">Momentaneamente sin stock</h3>
            </div>
        </>
    )

}

export default ItemCount