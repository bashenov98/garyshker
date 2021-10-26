import * as React from 'react';
import './index.css';

import homeSvg from '../../assets/images/Home.svg';
import heart from '../../assets/images/heart.svg';
import phone from '../../assets/images/phone.svg';
import faq from '../../assets/images/faq.svg';
import gIcon from '../../assets/images/g-icon.svg';
import {useHistory, useLocation} from "react-router-dom";

export const Sidebar = () => {
  const router = useHistory();
  const Location = useLocation();

  return (
    <div className="d-flex flex-column sidebar">
      <div className="sidebar-title">Menu</div>
      <div className="d-flex flex-column sidebar-content">
        <div className="d-flex align-items-center menu-item" onClick={() => {router.push('/edu')}}>
          <div className="menu-item__div d-flex justify-content-center align-items-center">
            <img src={homeSvg} alt="home icon"/>
          </div>
          <span className={(Location.pathname === '/edu') ? "menu-item__text--active" : "menu-item__text"}>Образование</span>
        </div>
        <div className="d-flex align-items-center menu-item" onClick={() => {router.push('/dobro')}}>
          <div className="menu-item__div d-flex justify-content-center align-items-center">
            <img src={heart} alt="heart icon"/>
          </div>
          <span className={(Location.pathname === '/dobro') ? "menu-item__text--active" : "menu-item__text"}>Добро</span>
        </div>
        <div className="menu-divider"/>
        <div className="d-flex align-items-center menu-item" onClick={() => {router.push('/about')}}>
          <div className="menu-item__div d-flex justify-content-center align-items-center">
            <img src={gIcon} alt="google icon"/>
          </div>
          <span className={(Location.pathname === '/about') ? "menu-item__text--active" : "menu-item__text"}>O Garyshker</span>
        </div>
        <div className="d-flex align-items-center menu-item" onClick={() => {router.push('/faq')}}>
          <div className="menu-item__div d-flex justify-content-center align-items-center">
            <img src={faq} alt="faq icon"/>
          </div>
          <span className={(Location.pathname === '/faq') ? "menu-item__text--active" : "menu-item__text"}>FAQ</span>
        </div>
        <div className="d-flex align-items-center menu-item" onClick={() => {router.push('/contact')}}>
          <div className="menu-item__div d-flex justify-content-center align-items-center">
            <img src={phone} alt="phone icon"/>
          </div>
          <span className={(Location.pathname === '/contact') ? "menu-item__text--active" : "menu-item__text"}>Контакты</span>
        </div>
      </div>
      <div className="d-flex align-items-center mb-4" onClick={() => {window.location.href = 'https://t.me/garyshkerchat'}}>
        <div className="chat-block d-flex justify-content-center align-items-center">
          <img src={phone} alt="phone icon"/>
        </div>
        <span className="chat-block__text">Перейти в чат сообщества</span>
      </div>
    </div>
  );
};
