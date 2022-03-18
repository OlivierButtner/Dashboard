import React from 'react';
import {NavLink} from "react-router-dom";

const Auth = () => {
    return (
        <div className="auth">
             {/*sert tà créer les liens vers les pages RegisterForm et login*/}
            <NavLink exact to="/register" className="nav-btn">Register</NavLink>
            <NavLink exact to="/login" className="nav-btn">Log-in</NavLink>
        </div>
    );
};

export default Auth;