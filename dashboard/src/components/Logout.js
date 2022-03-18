import React from 'react';
import {NavLink} from "react-router-dom";

const Logout = () => {

    return (
        <div>
            <NavLink exact to="/logout" className="nav-btn">Log-out</NavLink>
        </div>
    );
};

export default Logout;