import CartWidget from "./CartWidget";
function Navbar() {
    return (
        <nav className="nav">
            <ul className="list">
                <li className="item-list"><p>Tienda de Gaston</p></li>
                <li className="item-list"><p>Home</p></li>
                <li className="item-list"><p>About</p></li>
                <li className="item-list"><p>Contact</p></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}
export default Navbar;