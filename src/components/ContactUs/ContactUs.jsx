import React, {useContext} from 'react';
import './index.scss';
import {AuthContext} from "../../context";

const ContactUs = () => {
    const {setHideSidebar, setIsAuthPage} = useContext(AuthContext);
    setHideSidebar(false);
    setIsAuthPage(false);
    return (
        <div className="contact d-flex">
            <div className="contact-left d-flex flex-column">
                <div className="contact-left__title">Свяжитесь с нами</div>
                <div className="contact-left__desc">
                    Если у вас возникли какие-либо вопросы или вы просто хотите пообщаться, заполните форму и отправьте запрос
                </div>
                <input type="text" className="contact-left__input" placeholder="Name"/>
                <input type="text" className="contact-left__input" placeholder="E-mail"/>
                <textarea className="contact-left__input contact-left__input--big" placeholder="Your message"/>
                <button className="contact-left__btn">Отправить</button>
            </div>
            <div className="contact-divider" />
            <div className="contact-right">
                <div className="mb-40">
                    <div className="contact-right__title">По вопросам и предложениям</div>
                    <div className="contact-right__desc">info@garyshker.com</div>
                </div>
                <div className="mb-40">
                    <div className="contact-right__title">Our HQ</div>
                    <div className="contact-right__desc">Abay street 98, Almaty, Kazakhstan</div>
                </div>
                <div className="">
                    <div className="contact-right__title">Поддержка</div>
                    <div className="contact-right__desc">help@garyshker.com</div>
                    <div className="contact-right__desc">+8 (777) 777 77 77</div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
