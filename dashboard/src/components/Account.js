import React from 'react';
import {NavLink} from "react-router-dom";

const Account = () => {
    return (
        <div>
            // le profil du user . update ses infos ?
            <NavLink to={"/"} className="nav-btn">Log out</NavLink>
        </div>
    );
};

export default Account;