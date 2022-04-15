import React, { useState, useContext } from 'react'
import cartContext from '../context/cartContext'
import Formulario from '../components/Formulario'
import ThankYouPage from '../components/ThankYouPage'
import { addItem } from '../firebase/firebase'

const CheckOut = () => {
    const { clear } = useContext(cartContext);
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ordenId, setOrdenId] = useState('')
    const [buyed, setBuyed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let datosOrden = { nombre, apellido, email, direccion, fecha: new Date() }
        setBuyed(true)
        let query = addItem(datosOrden);
        query
            .then((resultado) => {
                setOrdenId(resultado.id);
            })
            clear()
    }

    return (
        <div className="form-container">
            {!buyed || !ordenId ? (<Formulario setBuyed={setBuyed}
                nombre={nombre}
                setNombre={setNombre}
                apellido={apellido}
                setApellido={setApellido}
                email={email}
                setEmail={setEmail}
                telefono={telefono}
                setTelefono={setTelefono}
                direccion={direccion}
                setDireccion={setDireccion}
                handleSubmit={handleSubmit}
            />) : (<ThankYouPage nombre={nombre} apellido={apellido} email={email} direccion={direccion} orden={ordenId} />)}
        </div>
    )
}

export default CheckOut