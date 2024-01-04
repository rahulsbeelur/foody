import React from 'react';
import logo from '../../static/foody-logo.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <Link to="/">
                <div className="img-container">
                    <img src={logo} className="logo" />
                </div>
            </Link>
            <div className="nav-items">
                <ul>
                    <li>
                        <div>Online Status: {onlineStatus ? '🟢' : '🔴'}</div>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
