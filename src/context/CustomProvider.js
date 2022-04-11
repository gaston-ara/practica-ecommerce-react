import React, { useEffect, useState } from 'react'
import { Provider } from './cartContext';

const CustomProvider = ({ children }) => {
    const [item, setItem] = useState([]);
    const [contador, setContador] = useState(0);

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

        item? setItem([...item, producto]): setItem([producto]);
      
        console.log(producto);
    }
    useEffect(() => {
        console.log(item);
    }, [item])

    return (
        <Provider value={{ addItem, setContador, item }}>
            {children}
        </Provider>
    )
}

export default CustomProvider