import React from 'react';
import logo from '../image/dashboard.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <h2>Welcome To DASHBOARD</h2>
        </div>
    );
};

export default Logo;