import {Link} from 'react-router-dom';
import './nav.css';

function Navbar() {
    return (
            <nav className="nav">
                <h2 className="logo">Amba Traders</h2>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>

            </nav>
    );
}

export default Navbar;