import React, { useEffect, useState } from 'react'
import { Provider } from './cartContext';

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [contador, setContador] = useState(0);
    const [totalQuant, setTotalQuant] = useState(0);
    const [itemPrice, setItemPrice] = useState(0);
    const [isInCart, setIsInCart] = useState(false);

    // Agregar item al carrito
    const addItem = (id, image, title, price) => {
        let producto = {
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
            },
            quantity: contador
        }

        let check = cart.findIndex(object => object.item.id === producto.item.id)

        if (check === -1) {
            cart? setCart([...cart, producto]): setCart(producto);
            setTotalQuant(totalQuant + producto.quantity);
        } else {
            setIsInCart(!isInCart);
            cart[check].quantity += producto.quantity;
            setTotalQuant(totalQuant + producto.quantity);
        }
    }
    //Eliminar item del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter((item, index) => index !== itemId));
        setTotalQuant(totalQuant - cart[itemId].quantity);
    }
    //Calcular precio total
    const getItemPrice = (cart) => {
        setItemPrice(cart.reduce((acc, value) => acc + value.item.price * value.quantity, 0));
    }
    //Vaciar Carrito
    const clear = () => {
        setCart([]);
        setTotalQuant(0);
    }
    useEffect(() => {
        getItemPrice(cart);
    }, [cart, isInCart])

    return (
        <Provider value={{ addItem, setContador, cart, removeItem, totalQuant, itemPrice, clear }}>
            {children}
        </Provider>
    )
}

export default CustomProvider