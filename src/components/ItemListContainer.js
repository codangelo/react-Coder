import { useState, useEffect } from 'react'
import getFetch from './getFetch'
import ItemList from './ItemList'

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
        <>
            <ItemList item={item} />
        </>
    )

}

export default ItemListContainer
