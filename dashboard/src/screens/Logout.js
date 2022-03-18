import React, {useEffect} from 'react';
import Cookies from "js-cookie";

const Logout = () => {

    useEffect(() => {
        Cookies.remove('userToken')
        window.location = '/';
    },[])
    return (
        <div>

        </div>
    );
};

export default Logout;