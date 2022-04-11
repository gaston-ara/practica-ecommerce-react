import { useEffect, useState, useContext } from "react"
import ItemCount from "./ItemCount";
import cartContext from '../context/cartContext';

function CounterContainer(props) {
    const [numero, setNumero] = useState(1);
    const {setContador} = useContext(cartContext);

    const sumar = () => {
        if (numero < props.stock) {
            return setNumero(numero + 1);
        }
    }
    const restar = () => {
        if (numero > 1) {
            return setNumero(numero - 1);
        }
    }
    useEffect(() => {
        props.setCounter(numero);
        setContador(numero);
    }, [numero])

    return (
        <ItemCount numero={numero} sumar={sumar} restar={restar} stock={props.stock} />
    )
}
export default CounterContainer;