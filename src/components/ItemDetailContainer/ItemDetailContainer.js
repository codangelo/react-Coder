import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/GetFirestore';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState()

    const {productId} = useParams()
    
    useEffect(() => {
        const baseProductos = getFirestore()

        baseProductos.collection("items").doc(productId).get()
        .then(item => setItemDetail({id:item.id, ...item.data()}))
        .catch (error => alert("Error:", error))

    },[productId])


    return (
        <div>
            {itemDetail && <ItemDetail itemDetail={itemDetail} />}
        </div>
    )
}


export default ItemDetailContainer
