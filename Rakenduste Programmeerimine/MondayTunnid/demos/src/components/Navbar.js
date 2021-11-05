import './Navbar.css';
import { Link } from 'react-router-dom';
import History from "../components/History";

function historyPush(){
  History.push("/");
}

function Navbar() {
  return(
    <div>
      <div className="header">
        <h1 className="logo" onClick={historyPush}>Mälestused.ee</h1>
          <div className="header-buttons">
            <Link to="/admin">
              <button className="button">Admin</button>
            </Link>
            <Link to="cart">
              <button className="button" id="delete-product-btn">CART</button>
            </Link>
          </div>
        </div>

          <div className="line">
            <hr/>
          </div>    
      </div>
  );
}

// alumine tehke ise

export default Navbar;