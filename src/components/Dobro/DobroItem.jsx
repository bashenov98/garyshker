import React from 'react';
import backpack from "../../assets/images/backpack.png";
import {useHistory} from "react-router-dom";


const DobroItem = (props) => {
    const router = useHistory();

    const getValue = () => {
        return (props.item.collected/props.item.necessary)*100
    }

    const details = (id) => {
        router.push('/dobro/'+ id);
    }

    return (
        <div className="item-card">
            {
                props.item.is_completed
                    ?
                    (
                        <div className="item-status-ended">
                            <h5 className="item-status-ended-label">Завершено</h5>
                        </div>
                    )
                    :
                    (
                        <div className="item-status">
                            <h5 className="item-status-label">В процессе</h5>
                        </div>
                    )
            }
            <div className="d-flex">
                <div className="">
                    <h3 className="item-header">{props.item.title}</h3>
                    <h6 className="item-body">{props.item.small_description}</h6><br/>
                    <progress max="100" value={getValue()}/>
                    <h7>{props.item.collected} ₸ из {props.item.necessary} ₸</h7><br/>
                    <button className="item-button" onClick={() => {details(2)}}>Подробнее</button>
                </div>
                <div>
                    <img src={backpack}/>
                </div>
            </div>
        </div>
    );
};

export default DobroItem;