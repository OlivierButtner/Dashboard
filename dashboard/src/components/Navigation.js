import React from 'react';
import { NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" className="nav-btn">Accueil</NavLink>
            <NavLink exact to="/about" className="nav-btn">About</NavLink>
        </div>
    );
};

export default Navigation;