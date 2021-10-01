import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/cart">
            <img className="cart" src="shopping-cart.svg" alt="Pooping"/>
            </Link>
        </div>
    );
}

export default Navbar;