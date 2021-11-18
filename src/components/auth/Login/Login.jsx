import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../context/index";
import {Redirect, useHistory} from "react-router-dom";
import axios from "axios";
import './index.scss';
import logoIcon from '../../../assets/images/logo-auth.png';

const Login = () => {
    const {isAuth, setIsAuth, setIsAuthPage} = useContext(AuthContext);
    setIsAuthPage(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const router = useHistory();

    const login = event => {
        event.preventDefault();

        axios.post("http://195.210.47.160/auth/login/", {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    setError('');
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('token', response.data.token);
                    router.push("/main");
                    setIsAuthPage(false);
                }
            })
            .catch(function (error) {
                console.log(error)
                setError('Введены некорректные данные!')
                setPassword('');
                setEmail('');
            });
    }

    return (
        <div className="login">
            <div className="login-top d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-center">
                    <img alt="logo" src={logoIcon} className="login-top__img"/>
                </div>
                <div>
                    <button className="login-top__btn login-top__btn--left" onClick={() => {router.push('/signup')}}>Регистрация</button>
                    <button className="login-top__btn login-top__btn--right" onClick={() => {router.push('/login')}}>Авторизация</button>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100">
                <div className="login-content">
                    <form onSubmit={login}>
                        <div>
                            <div className="login-enter-text">Авторизация</div>
                            <div className="login-enter-email">Почта</div>
                            <input type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="login-input"
                                   placeholder="Enter email ..."
                            />
                            <div className="login-enter-pass">Пароль</div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="Enter password ..."
                            />
                            <div className="login-remember">
                                <input type="checkbox"/><label className="login-remember__text">Запомнить меня</label>
                            </div>
                        </div>
                        <div className="login-forgot">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <a href="" className="login-forgot__text">Забыли пароль?</a>
                                <button className="login-forgot__btn" onClick={login}>Войти</button>
                            </div>
                            <label className="login-error">{error}</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
