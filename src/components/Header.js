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
                    <img src={logo} className="logo rounded-[150px]" />
                </div>
            </Link>
            <div className="nav-items">
                <ul>
                    <li className="flex items-center">
                        <div className="text-[14px]">{onlineStatus ? 'Online🟢' : 'Offline🔴'}</div>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="text-[20px]">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <div className="text-[20px]">About Me</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <div className="text-[20px]">Contact</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery">
                            <div className="text-[20px]">Grocery</div>
                        </Link>
                    </li>
                    <li>
                        <div className="text-[20px]">Cart</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
