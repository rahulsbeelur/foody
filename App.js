import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '/static/foody-logo.png';

const Header = () => (
    <div className="header">
        <div className="img-container">
            <img src={logo} className="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
);

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
