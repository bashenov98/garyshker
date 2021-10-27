import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import DobroItem from "./DobroItem";
import './index.scss';
import {AuthContext} from "../../context";

const Dobro = () => {
  const {setHideSidebar, setIsAuthPage} = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);

    const [dobro, setDobro] = useState([
      {
        is_completed: false,
        title: 'РюкзакKIT1',
        small_description: 'Собрали и развезли 50 рюкзаков для детей начальных классов из малообеспеченных семей.',
        collected: '1000000',
        necessary: '1500000',
      },
      {
        is_completed: true,
        title: 'РюкзакKIT2',
        small_description: 'Собрали и развезли 50 рюкзаков для детей начальных классов из малообеспеченных семей.',
        collected: '1000000',
        necessary: '1500000',
      },
      {
        is_completed: true,
        title: 'РюкзакKIT3',
        small_description: 'Собрали и развезли 50 рюкзаков для детей начальных классов из малообеспеченных семей.',
        collected: '1000000',
        necessary: '1500000',
      },
      {
        is_completed: false,
        title: 'РюкзакKIT4',
        small_description: 'Собрали и развезли 50 рюкзаков для детей начальных классов из малообеспеченных семей.',
        collected: '1000000',
        necessary: '1500000',
      },
    ]);
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
      <div className="dobro-page">
        <div className="mb-36">
          <button className="dobro-page__btn">ПОДДЕРЖАТЬ ПРОЕКТ ДЕНЬГОЙ</button>
        </div>
        <div className="d-flex flex-wrap">
          {dobro.map(item => {
            return (
              <DobroItem item={item}/>
            )
          })}
        </div>
      </div>
    );
};

export default Dobro;
