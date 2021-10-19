import React from 'react';
import backpack from "../../assets/images/backpack.png"
import ReactPlayer from "react-player";
import './index.scss';

const DobroItem = () => {
    return (
        <div className="dobro">
            <div className="d-flex dobro-card">
                <div>
                    <img className="item-image" src={backpack}/>
                </div>
                <div>
                    <h3 className="card-header">РюкзакKIT</h3>
                    <h6 className="card-body">это социальный проект направленный на помощь детям из малообеспеченных семей. Идея заключается в том, чтобы снабдить детей всеми необходимыми школьными принадлежностями для начала учебного года.</h6>
                    <div className="card-progresss">
                        <div className="progress-bars">
                            <progress max="100" value="67"/>
                        </div>
                        <div className="d-flex progress-bar-value">
                            <div className="progress-values">
                                <h5 className="collected-needed">Собрано</h5>
                                <h6 className="money-value">1 000 000 kzt</h6>
                            </div>
                            <div className="divider"/>
                            <div className="progress-values">
                                <h5 className="collected-needed">Нужно</h5>
                                <h6 className="money-value">1 500 000 kzt</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <h3>Описание</h3>
                </div>
                <div>
                    <h3>Отчеты</h3>
                </div>
            </div>
            <h3 className="report-header">Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge</h3>
            <p className="report-body">Crowds waited for Lewis’ body at the foot of the bridge, where he was met by Alabama state troopers, who safely escorted him across and on to the state capitol.

                “His final march, that final crossing, so different than the first, speaks to the legacy that he leaves behind and the lives that he changed,” Sewell said. "It’s poetic justice that this time, Alabama state troopers will see John to his safety. "

                As the horse-drawn caisson approached the bridge, those in the masses on the sidewalk could be heard singing for Lewis. In an emotional moment, the voices stopped as Lewis' casket began to make its way across the bridge in silent reverence.

                Lewis, who died earlier this month at the age of 80, made his last journey across the Edmund Pettus Bridge with only his family to join him.

                Lewis' son, brothers and sister followed behind the caisson along Lewis' longtime chief of staff wearing shirts emblazoned with the words "Good Trouble," a nod to Lewis' view on activism.
            </p>
        </div>
    );
};

export default DobroItem;