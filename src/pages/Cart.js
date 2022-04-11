import CartListContainer from "../components/CartListContainer";
import { useContext } from "react";
import cartContext from "../context/cartContext";

function Cart() {
    const { item } = useContext(cartContext);
    return (
        <div>
            <h1>Carrito</h1>
            {item.length > 0 ? (<CartListContainer
                item={item}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                quantity={item.quantity
                } />) : (<h1>Tu carrito está vacio :(</h1>)}
        </div>
    )
}
export default Cart;
