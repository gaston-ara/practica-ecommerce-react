import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Item from "./Item";

function ItemList(props) {
    const [items, setItems] = useState([]);
    const fetching = async () => {
        await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
            .then(res => res.json())
            .then(data => {
                setItems(data.results);
            })
    }
    useEffect(() => {
       fetching()
    }, [])
    return (<div className="itemlist">
        {items? (items.map((item) => {
            return <Link to={`/categories/${item.id}`}><Item
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.thumbnail}
                stock={item.available_quantity}
            /></Link> 
        })) : (<h2>Cargando...</h2>)
        }
    </div>)
}
export default ItemList;