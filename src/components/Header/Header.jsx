import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context";
import './index.scss';
import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import user from '../../assets/images/user.svg';
import logoutIcon from '../../assets/images/logout.svg';
import {useHistory} from "react-router-dom";
import {withRouter} from 'react-router-dom';

const Header = () => {
    const router = useHistory();
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [searchValue, setSearchValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const login = () => {
        if (router !== 'undefined') {
            console.log(router)
            router.push('/login');
        }
    }

    const signup = () => {
        if (router !== 'undefined') {
            console.log(router)
            router.push('/signup');
        }
    }


    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        console.log(isAuth);
    }

    const searchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const userClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="d-flex justify-content-between align-items-center header">
            <div className="d-flex">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header-search">
                    <input className="header-input" placeholder="Search" value={searchValue} onChange={searchChange}/>
                    <img src={search} alt="search icon" className="search-icon"/>
                </div>
            </div>
            <div>
                {isAuth ? (
                  <div className="header-auth">
                      <div className="d-flex align-items-center" onClick={userClick}>
                          <div className="header-auth__avatar"/>
                          <div className="header-auth__name">Mustafa Myrza</div>
                          <img src={arrowDown} alt="arrow down" className="header-auth__icon"/>
                      </div>
                      {showDropdown && (
                        <div className="header-dd">
                            <div className="dd-item d-flex">
                                <img src={user} alt="user icon"/>
                                <div className="header-dd__text">Личный кабинет</div>
                            </div>
                            <div className="header-dd__divider"/>
                            <div className="dd-item d-flex">
                                <img src={logoutIcon} alt="logout icon"/>
                                <div className="header-dd__text" onClick={logout}>Выход</div>
                            </div>
                        </div>
                      )}
                  </div>
                ) : (
                  <div className="d-flex">
                      <button className='header-btn margin-right-16' onClick={signup}>Регистрация</button>
                      <button className='header-btn' onClick={login}>Войти</button>
                  </div>
                )}
            </div>
        </div>
    );
};

export default Header;
