import CartListContainer from "../components/CartListContainer";
import { useContext } from "react";
import cartContext from "../context/cartContext";

function Cart() {
    const { cart } = useContext(cartContext);
    return (
        <div>
            <h1>Carrito</h1>
            {cart.length > 0 ? (<CartListContainer
                item={cart}
                id={cart.id}
                image={cart.image}
                price={cart.price}
                title={cart.title}
                quantity={cart.quantity
                } />) : (<h1>Tu carrito está vacio :(</h1>)}
        </div>
    )
}
export default Cart;
