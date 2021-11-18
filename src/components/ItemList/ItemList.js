import Item from '../Item/Item';


const ItemList = ({ item }) => {

    return (
        
        item.map(item => <Item key={item.id} item={item} />)
        
    )
}

export default ItemList
