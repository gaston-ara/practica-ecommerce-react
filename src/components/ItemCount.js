function ItemCount(props) {
    return (
        <div className="counter">
            <button className="btn-counter" onClick={props.restar}>-</button>
            <span className="num-count">{props.numero}</span>
            <button className="btn-counter" onClick={props.sumar}>+</button>
            <p>Stock: {props.stock}</p>
        </div>
    )
}
export default ItemCount;