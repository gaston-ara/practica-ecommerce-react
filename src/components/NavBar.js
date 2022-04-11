import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="nav">
            <ul className="list">
                <li className="item-list"><NavLink to="/">Tienda de Gaston</NavLink></li>
                <li className="item-list"><NavLink to="/">Home</NavLink></li>
                <li className="item-list"><NavLink to="#">About</NavLink></li>
                <li className="item-list"><NavLink to="#">Contact</NavLink></li>
                <li><NavLink to='/cart'><CartWidget/></NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;