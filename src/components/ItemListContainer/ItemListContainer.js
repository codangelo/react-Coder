import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../services/GetFirestore';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
    const [item, setItem] = useState()
    
    const [loading, setLoading] = useState (true)

    const {categId} = useParams()


    useEffect(() => {

        const baseProductos = getFirestore()
        
        if (categId) {

        const baseProductosCategorizados= baseProductos.collection("items").where("categ","==",categId).get()

        baseProductosCategorizados
        
        .then(response => setItem(response.docs.map(item => ({id:item.id, ...item.data()}))))
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))
    }

        else {
            const baseProductosGlobal = baseProductos.collection("items").orderBy("categ").get()
            baseProductosGlobal
            .then(response => setItem(response.docs.map(item => ({id:item.id, ...item.data()}))))
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
        } 


    }, [categId])

    return (
        <div className="itemList">
            {loading ? <Loader /> : <ItemList item={item} />}
        </div>
    )

}

export default ItemListContainer
