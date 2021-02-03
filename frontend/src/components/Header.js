import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap.min.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <ul className="navbar-nav mr-auto">
                    <h4 className="nav-item logo">LOGO</h4>
                    <Link to="/">
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link to="/wishlist">
                        <li className="nav-item">Cart</li>
                    </Link>
                    <li className="nav-item">Login</li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
