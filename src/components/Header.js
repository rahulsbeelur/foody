import React from 'react';
import logo from '../../static/foody-logo.png';

export const Header = () => (
    <div className="header">
        <div className="img-container">
            <img src={logo} className="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;
