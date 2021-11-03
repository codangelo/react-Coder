import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import getFetch from '../../services/getFetch'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [item, setItem] = useState()
    
    const {categId} = useParams()


    useEffect(() => {
        console.log(categId)
        
        if (categId) {
        getFetch
            .then(res => {
                setItem(res.filter(prod => prod.categ === categId))
            })
            .catch(error => console.log(error))
        }
        else {
            getFetch
            .then(res => {
                setItem(res)
            })
            .catch(error => console.log(error))
        }

    }, [categId])

    return (
        <div className="itemList">
            {item && <ItemList item={item} />}
        </div>
    )

}

export default ItemListContainer
