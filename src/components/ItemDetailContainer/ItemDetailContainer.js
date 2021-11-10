import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import getFetch from '../../services/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState()

    const {productId} = useParams()
    
    useEffect(() => {
        getFetch
            .then(res => {
                setItemDetail(res.find(prod => parseInt(prod.id) === parseInt(productId)))
            })
            .catch(error => console.log(error))
    },[productId])

    return (
        <div>
            {itemDetail && <ItemDetail itemDetail={itemDetail} />}
        </div>
    )
}


export default ItemDetailContainer
