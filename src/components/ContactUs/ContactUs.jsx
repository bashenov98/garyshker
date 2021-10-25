import React from 'react';
import './index.scss'
import {Sidebar} from "../Sidebar/Sidebar";
import backpack from "../../assets/images/backpack.png";

const ContactUs = () => {
    return (
        <div>
            <h3 className="headers">Say hi to our team</h3>
            <h1 className="main-header">Contact Us</h1>
            <div>
                <div>
                    <h3 className="headers">Feel free to contact us and we will get
                        back to you as soon as we can.</h3>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Your Message"/>
                    <button> Отправить</button>
                </div>
                <div>
                    <h3 className="headers">По вопросам и предложениям</h3>
                    <h3>garyshker.info@garyshker.com</h3>
                    <br/>
                    <h3 className="headers">Our HQ</h3>
                    <h3>Abay street 98, Almaty, Kazakhstan</h3>
                    <br/>
                    <h3 className="headers">Поддержка</h3>
                    <h3>+8 (777) 777 77 77</h3>
                    <h3>garyshker.help@garyshker.com</h3>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;