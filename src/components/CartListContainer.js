import CartList from './CartList'
import { useContext } from 'react'
import cartContext from '../context/cartContext'

function CartListContainer(props) {
    const { item } = useContext(cartContext)

    const delCart = (id) => {
        console.log('click ' + id);
        console.log(item[id]);
    }
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
                                delCart={delCart}
                            />)
                    })) : (<h1>Cargando...</h1>)}

                </tbody>
            </table>
        </div>
    )
}

export default CartListContainer;