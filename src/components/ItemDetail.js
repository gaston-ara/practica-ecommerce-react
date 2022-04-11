import { useState } from "react";
import {Link} from 'react-router-dom'
import CounterContainer from "./CounterContainer";
import { useContext } from 'react';
import cartContext from '../context/cartContext';

function ItemDetail(props) {
    const [agregado, setAgregado] = useState(false);
    const {addItem} = useContext(cartContext);

    const handleClick = () => {
        setAgregado(true);
        addItem(props.id, props.image, props.title, props.price);
    }
    return (
        <div className="item-detail">
            <img src={props.image} alt="" className="detail-img" />
            <div className="title">{props.title}</div>
            <div className="price">${props.price}</div>
            <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nulla odio vel aliquam mollitia non, totam quam minus, atque illum beatae. Temporibus dicta adipisci ut eius qui omnis eos odit!</div>
            <CounterContainer stock={props.stock} setCounter={props.setCounter} />
            {!agregado? (<button className="btn" onClick={handleClick}>Agregar al carrito</button>):(<Link to="/cart" className="btn">Terminar compra</Link>)}
        </div>
    )
}
export default ItemDetail;