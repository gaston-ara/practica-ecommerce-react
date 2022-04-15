import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const itemId = useParams();
    const [items, setItems] = useState([]);
    const [detail, setDetail] = useState();
    const [counter, setCounter] = useState(0);

    const fetching = async () => {
        await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
            .then(res => res.json())
            .then(data => {
                setItems(data.results);
            })
    }
    const findData = () => {
        let detalle = items.find(item => item.id === itemId.categorieId);
        setDetail(detalle);
    }

    useEffect(() => {
        fetching();            
    }, [])
    useEffect(() => {
        findData();
    }, [items])

    return (
        <div className="detail-container">
            {detail ? (<ItemDetail
                id={detail.id}
                title={detail.title}
                price={detail.price}
                image={detail.thumbnail}
                stock={detail.available_quantity}
                setCounter={setCounter}
            />) : (<h2>Cargando...</h2>)}
        </div>
    )
}
export default ItemDetailContainer;