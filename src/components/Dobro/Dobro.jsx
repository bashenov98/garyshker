import React, {useContext, useEffect, useState} from 'react';
import {MenuContext} from "../../context";
import backpack from "../../assets/images/backpack.png"
import DobroDetail from "./DobroDetail";
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
import axios from "axios";
import DobroItem from "./DobroItem";

const Dobro = () => {
    const [dobro, setDobro] = useState([]);
    const router = useHistory();

    useEffect(() => {
        fetchItems();
    }, []);

    let config = {
        headers: {
            'Authorization': 'JWT ' + localStorage.getItem('token')
        }
    }

    const fetchItems = () => {
        axios.get("http://195.210.47.160/dobro/projects", config)
            .then(function (response) {
                console.log(config.headers)
                setDobro(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <div>
            <div>
                <button>ПОДДЕРЖАТЬ ПРОЕКТ ДЕНЬГОЙ</button>
            </div>
            <div>
                {dobro.map(item => {
                    return (
                        <div>
                            <DobroItem item={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Dobro;