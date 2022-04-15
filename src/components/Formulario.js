import React, { useState } from 'react'

const Formulario = (props) => {

    
    return (
        <>
        <h2>Datos personales</h2>
        <form className='form' onSubmit={(e) => props.handleSubmit(e)}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name='name' value={props.nombre} onChange={(e) => props.setNombre(e.target.value)} required />
            <label htmlFor="surname">Apellido</label>
            <input type="text" name='surname' value={props.apellido} onChange={(e) => props.setApellido(e.target.value)} required />
            <label htmlFor="address">Dirección</label>
            <input type="text" name='address' value={props.direccion} onChange={(e) => props.setDireccion(e.target.value)} required />
            <label htmlFor="telephone">Telefono</label>
            <input type="tel" name='telephone' value={props.telefono} onChange={(e) => props.setTelefono(e.target.value)} required />
            <label htmlFor="mail">Email</label>
            <input type="email" name='mail' value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
            <input className="btn" type="submit" value="Enviar" />
        </form>
        </>
        
    )
}

export default Formulario