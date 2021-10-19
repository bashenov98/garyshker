import React, {useContext, useState} from 'react';
import {MenuContext} from "../../context";
import backpack from "../../assets/images/backpack.png"
import DobroItem from "./DobroItem";
import {Sidebar} from "../Sidebar/Sidebar";
import cultureImg from "../../assets/images/culture-icon.png";
import star from "../../assets/images/star.png";
import {PopularItem} from "../PopularItem/PopularItem";
import book from "../../assets/images/book.png";
import {ReadItem} from "../ReadItem/ReadItem";
import watch from "../../assets/images/watch.png";
// import {WatchItem} from "./WatchItem/WatchItem";
import {Modal} from "../Modal/Modal";
import {useHistory} from "react-router-dom";

const Dobro = () => {
    const [dobro, setDobro] = useState([]);
    const router = useHistory();

    const details = (id) => {
        router.push('/dobro/'+ id)
    }

    return (
        <div>
            <div></div>
            <div>
                <div>
                    <h3>РюкзакKIT</h3>
                    <h6>Собрали и развезли 50 рюкзаков для детей начальных классов из малообеспеченных семей.</h6>
                    <progress max="100" value="67"/>
                    <button onClick={() => {details(2)}}>Подробнее</button>
                </div>
                <div>
                    <img src={backpack}/>
                </div>
            </div>
        </div>
    );
};

export default Dobro;