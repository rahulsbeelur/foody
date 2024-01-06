import React, { useContext } from 'react';
import logo from '../../static/foody-logo.jpg';
import cart from '../../static/cart.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    const itemsLength = Object.values(cartItems).reduce((accumulator, current) => accumulator + current[0], 0);
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
                        <Link to="/cart">
                            <div className="text-[20px] font-bold flex gap-2"><img src={cart} className="w-6 h-6 my-auto" /> ({itemsLength})</div>
                        </Link>
                    </li>
                    <li>
                        <div className="text-[20px] font-bold">{loggedInUser}</div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
