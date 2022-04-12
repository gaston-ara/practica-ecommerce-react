import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from '../context/cartContext';

function Navbar() {
    const { totalQuant } = useContext(cartContext);
    return (
        <nav className="nav">
            <ul className="list">
                <li className="item-list"><NavLink to="/">Tienda de Gaston</NavLink></li>
                <li className="item-list"><NavLink to="/">Home</NavLink></li>
                <li className="item-list"><NavLink to="#">About</NavLink></li>
                <li className="item-list"><NavLink to="#">Contact</NavLink></li>
                {totalQuant? (<li><NavLink to='/cart'><CartWidget totalQuant={totalQuant}/></NavLink></li>):(null)}
            </ul>
        </nav>
    )
}
export default Navbar;