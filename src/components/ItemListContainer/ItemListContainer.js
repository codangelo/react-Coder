import { useState, useEffect } from 'react'
import getFetch from '../../services/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [item, setItem] = useState([])


    useEffect(() => {
        getFetch
            .then(res => {
                setItem(res)
            })
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="itemList">
            <ItemList item={item} />
        </div>
    )

}

export default ItemListContainer
