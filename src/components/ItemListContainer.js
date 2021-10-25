import ItemCount from './ItemCount'

const ItemListContainer = ({mensaje}) => {
    return(
        
        <div className="articulo">
        <h2>{mensaje}</h2>
        <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemListContainer
