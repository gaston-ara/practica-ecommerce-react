import CartList from './CartList'
import { useContext } from 'react'
import cartContext from '../context/cartContext'
import { NavLink } from 'react-router-dom'

function CartListContainer(props) {
    const { removeItem, itemPrice, clear } = useContext(cartContext)

    return (
        <div className='cartListContainer'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item ? (props.item.map((item, index) => {
                        return (
                            <CartList
                                id={index}
                                image={item.item.image}
                                price={item.item.price}
                                title={item.item.title}
                                quantity={item.quantity}
                                totalItem={item.item.price * item.quantity}
                                removeItem={removeItem}
                            />)
                    })) : (<h1>Cargando...</h1>)}
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>${itemPrice}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={clear}>Vaciar Carrito</button>
            <NavLink to="/form">Finalizar compra</NavLink>
        </div>
    )
}

export default CartListContainer;