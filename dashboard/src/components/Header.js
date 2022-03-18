import React, {useContext} from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";
import Cookies from "js-cookie";
import Auth from "./Auth";
import Logout from "./Logout";

const Header = () => {
    const token = Cookies.get('userToken');

    return (
// Si uid est true (connecté) alors retourne le lien "profil" sinon les liens "login et register"
        <div className="header">
            <Navigation/>
            <Logo/>
            {token ? (
                <Logout/>
            ) : (
                <Auth/>
            )}
        </div>
    );
};

export default Header;