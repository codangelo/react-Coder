import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import getFetch from '../../services/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
    const [item, setItem] = useState()
    
    const [loading, setLoading] = useState (true)

    const {categId} = useParams()


    useEffect(() => {
        
        if (categId) {
        getFetch
            .then(res => {
                setItem(res.filter(prod => prod.categ === categId))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
        else {
            getFetch
            .then(res => {
                setItem(res)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }

    }, [categId])

    return (
        <div className="itemList">
            {loading ? <Loader /> : <ItemList item={item} />}
        </div>
    )

}

export default ItemListContainer
