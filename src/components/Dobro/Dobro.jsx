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

    const [dobro, setDobro] = useState([]);
    const router = useHistory();

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get("http://195.210.47.160/dobro/projects")
            .then(function (response) {
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
