import carritoimg from '../images/carritoimg.png';

function CartWidget() {
    return <>
    <div className="back-cart">
        <img className="cart-img" src={carritoimg} alt="carrito"/>
    </div>
    
    </>
}
export default CartWidget;