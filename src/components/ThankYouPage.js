import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouPage = (props) => {
    return (
        <div>
            <h1>Gracias por su compra</h1>
            <div className="orden-nombre">Nombre: {props.nombre}</div>
            <div className="orden-apellido">Apellido: {props.apellido}</div>
            <div className="orden-email">Email: {props.email}</div>
            <div className="orden-direccion">Dirección: {props.direccion}</div>
            <div className="numero-orden">Numero de orden: {props.orden}</div>
            <Link to="/">Volver a Inicio</Link>
        </div>
    )
}

export default ThankYouPage