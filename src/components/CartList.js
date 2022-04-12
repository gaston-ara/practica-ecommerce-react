import React from 'react'

const CartList = (props) => {
    return (

        <tr id={props.id}>
            <td>
                <img src={props.image} width="40px" alt='producto' />
                <p>{props.title}</p>
            </td>
            <td>${props.price}</td>
            <td>
                x{props.quantity}
            </td>
            <td>${props.totalItem}</td>
            <td>
                <button className='btn-delete' onClick={()=>{props.removeItem(props.id)}}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CartList