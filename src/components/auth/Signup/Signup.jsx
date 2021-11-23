import React, {useState, useContext} from 'react';
import axios from "axios";
import {AuthContext} from "../../../context";
import './index.scss';
import logoIcon from "../../../assets/images/logo-auth.png";
import {routes} from "../../../utils/routes";
import {useHistory} from "react-router-dom";

const Signup = () => {
    const { setIsAuthPage} = useContext(AuthContext);
    const router = useHistory();
    setIsAuthPage(true);
    const [data, setData] = useState({fullname: '',
        countrycity: '', birth_date: '', email: '', password: '', password2: '', terms_ofuser: false})
    const [error, setError] = useState('');
    const signup = event => {
        console.log(data.terms_ofuser)
        axios.post("http://195.210.47.160/auth/signup/", {
            email: data.email,
            password: data.password,
            terms_ofuser: data.terms_ofuser,
            profile:{
                full_name: data.fullname,
                birth_date: data.birth_date,
                city: data.countrycity
            }
            }
        )
            .then(function (response) {
                if (response.status == 200) {
                    setError('');
                    console.log(response);
                    router.push('login');
                }
            })
            .catch(function (error) {
                setError('Введены некорректные данные!')
                setData({fullname: '',
                    countrycity: '', birth_date: '', email: '', password: '', password2: ''});
            });
    }

    function terms() {
        if (document.getElementById('terms').checked && document.getElementById('values').checked)
            setData({...data, terms_ofuser: true});
        else
            setData({...data, terms_ofuser: false});
    }
    return (
        <div className="sign-up ">
            <div className="sign-up__top d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-center sign-up__top__img">
                    <img alt="logo" src={logoIcon}onClick={() => {router.push('/edu')}}/>
                </div>
                <div className="d-flex">
                    <button className="sign-up__top__btn" onClick={() => {router.push('/signup')}}>Регистрация</button>
                    <button className="sign-up__top__btn sign-up__top__btn--active" onClick={() => {router.push('/login')}}>Авторизация</button>
                </div>
            </div>
            <div className="sign-up__content d-flex justify-content-center">
                <div className="sign-up__form">
                    <div className="sign-up__form__title">Регистрация</div>
                    <div className="sign-up__form__name">Имя и фамилия</div>
                    <input type="text"
                           value={data.fullname}
                           onChange={(e) => setData({...data, fullname: e.target.value})}
                           className="sign-up__form__input"
                    />
                    <div className="sign-up__form__name">Страна, город</div>
                    <input type="text"
                           value={data.countrycity}
                           onChange={(e) => setData({...data, countrycity: e.target.value})}
                           className="sign-up__form__input"
                    />
                    <div className="sign-up__form__name">Дата рождения</div>
                    <input type="date"
                           value={data.birth_date}
                           onChange={(e) => setData({...data, birth_date: e.target.value})}
                           className="sign-up__form__input"
                    />
                    <div className="sign-up__form__name">Почта</div>
                    <input type="text" className="sign-up__form__input"/>
                    <div className="sign-up__form__name">Пароль</div>
                    <input type="password"
                           value={data.password}
                           onChange={(e) => setData({...data, password: e.target.value})}
                           className="sign-up__form__input"
                    />
                    <div className="sign-up__form__name">Подтвердить пароль</div>
                    <input type="password"
                           value={data.password2}
                           onChange={(e) => setData({...data, password2: e.target.value})}
                           className="sign-up__form__input"
                    />
                    <label>{error}</label>
                    <div className="sign-up__form__name">Наши ценности</div>
                    <ul>
                        <li>Любовь</li>
                        <li>Добро</li>
                        <li>Знание</li>
                    </ul>
                    <br/>
                    <input type="checkbox"
                           id="terms"
                           value={data.terms_ofuser}
                           onClick={terms}
                    /><label className="sign-up__form__label">Я разделяю ценности сообщества</label>
                    <br/>
                    <input type="checkbox"
                           onClick={terms}
                           id="values"
                    /><label className="sign-up__form__label">I agree to <a href="#">terms & conditions</a></label>
                    <div className="sign-up-forgot">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <a href="" className="sign-up-forgot__text">Забыли пароль?</a>
                            <button className="sign-up-forgot__btn" onClick={signup}>Зарегистрироваться</button>
                        </div>
                        <label className="sign-up-error">{error}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
