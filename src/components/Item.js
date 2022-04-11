

function Item(props){
    return(
        <div className="item" id={props.id}>
            <img src={props.image} className="imagen" alt="producto"/>
            <div className="title">{props.title}</div>
            <div className="price">${props.price}</div>
        </div>
    )
}
export default Item; 