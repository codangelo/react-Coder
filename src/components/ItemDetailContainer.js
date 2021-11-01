import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from './getFetch';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({})

    const { itemId } = useParams()

    useEffect(() => {
        getFetch
            .then(res => {
                setItemDetail(res.find(prod => prod.id === itemId))
            })
            .catch(res => console.log(res))
    },[itemId])

    return (
        <>
            <ItemDetail itemDetail={itemDetail} />
        </>
    )
}

export default ItemDetailContainer
