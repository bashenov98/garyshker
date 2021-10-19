import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss';
import logoBig from '../../assets/images/logo-big.png';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={logoBig} alt="logo"/>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex footer-columns">
                  <div className="footer-column footer-column--services d-flex flex-column">
                    <a href='/edu' className="footer-column__item">Контент</a>
                    <a href='/edu' className="footer-column__item">Образование</a>
                    <a href='/dobro' className="footer-column__item">Добро</a>
                  </div>
                  <div className="footer-column footer-column--about d-flex flex-column">
                    <a href='#' className="footer-column__item">О нас</a>
                    <a href='#' className="footer-column__item">Our Story</a>
                    <a href='#' className="footer-column__item">Benefits</a>
                    <a href='#' className="footer-column__item">Team</a>
                    <a href='#' className="footer-column__item">Careers</a>
                  </div>
                  <div className="footer-column d-flex flex-column">
                    <a href='#' className="footer-column__item">Помощь</a>
                    <a href='#' className="footer-column__item">FAQs</a>
                    <a href='#' className="footer-column__item">Contact Us</a>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center footer-chat">
                  <div className="footer-chat__text">Перейти в чат сообщества?</div>
                  <button className="footer-chat__btn">Перейти!</button>
                </div>
            </div>
            <div className="footer-bottom d-flex justify-content-between">
                <div className="d-flex">
                    <a href='#' className="footer-bottom__text">Terms & Conditions</a>
                    <a href='#' className="footer-bottom__text">Privacy Policy</a>
                </div>
              <div className="d-flex">
                <FontAwesomeIcon className="mr-3" icon={['fab', 'facebook']} />
                <div className="m-right-3"/>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                <div className="m-right-3"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </div>
            </div>
        </div>
    );
};

export default Footer;
