import React, {useState} from 'react';
import axios from "axios";
import LoginForm from "./LoginForm";


const RegisterForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

const handleRegister = async (e) => {
        e.preventDefault();
        const usernameError = document.querySelector('.username-error');
        const emailError = document.querySelector('.email-error');
        const passwordError = document.querySelector('.password-error');
        const passwordConfirmError = document.querySelector('.passwordConfirm-error');

        passwordConfirmError.innerHTML = '';

        if (password !== controlPassword ) {
            passwordConfirmError.innerHTML = 'Passwords do not match';
        } else {
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}users`,
            data: {
                username,
                email,
                password
            }
        })
            .then((res) => {
                if (res.data.errors) {
                    usernameError.innerHTML = res.data.errors.username;
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    setFormSubmit(true);
                }
            })
            .catch((err) => console.log(err));
        }

    }

    return (
        <>
            {formSubmit ? (
                <>
                <LoginForm />
                <h4 className="success">Register successful, please login</h4>
                </>
            ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
            <label htmlFor="username">Username</label>
            <br/>
            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}
                   value={username}/>
            <div className="username-error"> </div>

            <label htmlFor="email">Email</label>
            <br/>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <div className="email-error"> </div>

            <label htmlFor="password">Password</label>
            <br/>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}
                   value={password}/>
            <div className="password-error"> </div>

            <label htmlFor="passwordConfirm">Confirm your Password</label>
            <br/>
            <input type="password" name="passwordConfirm" id="passwordConfirm"
                   onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}/>
            <div className="passwordConfirm-error"> </div>
            <input type="submit" value="Validate"/>
        </form>
                )}
        </>
    );
};

export default RegisterForm;