import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import UidContext from "./appContext";
import WidgetContext from "./WidgetContext";
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState('wawa');
    const [password, setPassword] = useState('azertyuiop');
    const [token, setToken] = useState("")
    const {uid, setUid} = useContext(UidContext);
    const {setWidgetList} = useContext(WidgetContext)
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (isLoaded) {
            history.push("/");
        }
    }, [isLoaded])
    const handleLogin = (e) => {
        e.preventDefault();
        const usernameError = document.querySelector('.username.error');
        const passwordError = document.querySelector('.email.password');

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}login`,
            withCredentials: true,
            data: {
                username,
                password,
            }
        })
            .then((res) => {
                if (res.data.errors) {
                    usernameError.innerHTML = res.data.errors.username;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    setToken(res.data.access_token)
                    Cookies.set('userToken', res.data.access_token)
                    setWidgetList(res.data.user.widgetsData)
                    localStorage.setItem('list', JSON.stringify(res.data.user.widgetsData));
                    setIsLoaded(true)

                }
            })

            .catch((err) => {
                console.log("error : ", err);
            })
    };

    return (
        <form action="" onSubmit={handleLogin} id="sign-in-form">
            <label htmlFor="username">Username</label>
            <br/>
            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}
                   value={username}/>
            <br/>
            <div className="username-error"></div>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}
                   value={password}/>
            <br/>
            <div className="password-error"></div>
            <br/>
            <input type="submit" value="Log-in"/>
        </form>
    );
};

export default LoginForm;