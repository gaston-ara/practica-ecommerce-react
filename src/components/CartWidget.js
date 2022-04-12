import carritoimg from '../images/carritoimg.png';

function CartWidget(props) {
    return <>
    <div className="back-cart">
        <img className="cart-img" src={carritoimg} alt="carrito"/>
        <div>{props.totalQuant}</div>
    </div>
    </>
}
export default CartWidget;