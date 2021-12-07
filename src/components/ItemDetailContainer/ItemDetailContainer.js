import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/GetFirestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        const baseProductos = getFirestore()

        baseProductos.collection("items").doc(productId).get()
            .then(item => setItemDetail({ id: item.id, ...item.data() }))
            .catch(error => alert("Error:", error))
            .finally(() => setLoading(false))

    }, [productId])


    return (
        <div>
            {loading ? <Loader /> : itemDetail && <ItemDetail itemDetail={itemDetail} />}
        </div>
    )
}


export default ItemDetailContainer
