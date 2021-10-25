import React from 'react';
import backpack from "../../assets/images/backpack.png";
import {useHistory} from "react-router-dom";
import './index.scss';


const DobroItem = (props) => {
    const router = useHistory();

    const getValue = () => {
        return (props.item.collected/props.item.necessary)*100
    }

    const details = (id) => {
        router.push('/dobro/'+ id);
    }

    return (
        <div className="dobro-item d-flex flex-column align-items-start">
            {props.item.is_completed && <div className="dobro-item__blur" />}
            {props.item.is_completed ? (
                <div className="dobro-item__status dobro-item__status--completed">
                    <div className="dobro-item__status__label">Завершено</div>
                </div>
            ) : (
                <div className="dobro-item__status">
                    <div className="dobro-item__status__label">В процессе</div>
                </div>
            )
            }
            <div className="d-flex dobro-item__content">
                <div className="dobro-item__left d-flex flex-column">
                    <div className="dobro-item__title">{props.item.title}</div>
                    <div className="dobro-item__desc">{props.item.small_description}</div>
                    <div className="position-relative w-100 mb-16">
                        <div className="dobro-item__slider dobro-item__slider--full"/>
                        <div
                          className="dobro-item__slider dobro-item__slider--active"
                          style={{width: `${Number(props.item.collected) * 100 / Number(props.item.necessary)}%`}}
                        />
                    </div>
                    <div>{props.item.collected} ₸ из {props.item.necessary} ₸</div>
                    <button className="dobro-item__button" onClick={() => {details(2)}}>Подробнее</button>
                </div>
                <div>
                    <img className="dobro-item__img" src={backpack} alt="backpack"/>
                </div>
            </div>
        </div>
    );
};

export default DobroItem;
