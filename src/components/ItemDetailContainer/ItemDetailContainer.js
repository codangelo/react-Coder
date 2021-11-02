import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import getFetch from '../../services/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    const {itemId} = useParams()
    
    useEffect(() => {
        console.log(parseInt(itemId))
        getFetch
            .then(res => {
                setItemDetail(res.find(prod => parseInt(prod.id) === parseInt(itemId)))
            })
            .catch(error => console.log(error))
    },[itemId])

    return (
        <div>
            <ItemDetail itemDetail={itemDetail} />
        </div>
    )
}

export default ItemDetailContainer
