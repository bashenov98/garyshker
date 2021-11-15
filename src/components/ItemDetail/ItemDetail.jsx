import React, {useContext, useEffect} from 'react';
import './index.scss';
import backlogo from '../../assets/images/backpack-new.png';
import play from "../../assets/images/polygon17.png";
import ReactPlayer from "react-player";
import {useState} from "react";
import {AuthContext} from "../../context";
import classNames from "classnames";
import axios from "axios";

export const ItemDetail = () => {
  const {setHideSidebar, setIsAuthPage} = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);
  const [isReportsActive, setIsReportsActive] = useState(false);
  const [item, setItem] = useState([]);

  const fetchItem = () => {
    axios.get("http://195.210.47.160/dobro/project_detail/"+"1")
        .then(function (response) {
          setItem(response.data);
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


  const itemData = {
    title: 'РюкзакKIT',
    description: 'это социальный проект направленный на помощь детям из малообеспеченных семей. Идея заключается в том, чтобы снабдить детей всеми необходимыми школьными принадлежностями для начала учебного года.',
    necessary: '1500000',
    collected: '1000000',
    videoSrc: 'https://www.youtube.com/watch?v=OEv8a1kY5tQ',
    infoTitle: 'Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge',
    infoTexts: [
      'Crowds waited for Lewis’ body at the foot of the bridge, where he was met by Alabama state troopers, who safely escorted him across and on to the state capitol.',
      '“His final march, that final crossing, so different than the first, speaks to the legacy that he leaves behind and the lives that he changed,” Sewell said. "It’s poetic justice that this time, Alabama state troopers will see John to his safety. "',
      'As the horse-drawn caisson approached the bridge, those in the masses on the sidewalk could be heard singing for Lewis. In an emotional moment, the voices stopped as Lewis\' casket began to make its way across the bridge in silent reverence.',
    'Lewis, who died earlier this month at the age of 80, made his last journey across the Edmund Pettus Bridge with only his family to join him.',
    'Lewis\' son, brothers and sister followed behind the caisson along Lewis\' longtime chief of staff wearing shirts emblazoned with the words "Good Trouble," a nod to Lewis\' view on activism.'],
  }
  const [isPlayActive, setIsPlayActive] = useState(false);

  const onPlayClick = () => {
    setIsPlayActive(true);
  };

  useEffect(() => {
    fetchItem();
  },[])

  const toUrl = (backurl) => {
    return 'http://195.210.47.160'+backurl;
  }

  const onPauseClick = () => {
    setIsPlayActive(false);
  };
  return (
    <div className="detail">
      <div className="detail-item d-flex">
        <div className="detail-item__img">
          <img src={toUrl(item.image)} alt="backlogo icon" className="item-backlogo-icon"/>
        </div>
        <div className="detail-item__content d-flex flex-column">
          <div className="detail-item__title">
            {item.title}
          </div>
          <div className="detail-item__desc">
            {item.small_description}
          </div>
          <div className="detail-item__bottom mt-auto d-flex flex-column">
            <div className="position-relative w-100">
              <div className="detail-item__slider detail-item__slider--full"/>
              <div className="detail-item__slider detail-item__slider--active" style={{width: `${Number(item.collected) * 100 / Number(item.necessary)}%`}}/>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-auto">
              <div className="text-center">
                <div className="detail-item__price-title">СОБРАНО</div>
                <div className="detail-item__price-amount">{Math.trunc(item.collected)} kzt</div>
              </div>
              <div className="detail-item__price-divider"/>
              <div className="text-center">
                <div className="detail-item__price-title">НУЖНО</div>
                <div className="detail-item__price-amount">{Math.trunc(item.necessary)} kzt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-btns d-flex">
        <div
            className={classNames([
                'detail-btns__item w-50',
                !isReportsActive && 'detail-btns__item--active',
            ])}
            onClick={() => setIsReportsActive(false)}
        >ОПИСАНИЕ</div>
        <div
          className={classNames([
            'detail-btns__item detail-btns__item--right w-50',
            isReportsActive && 'detail-btns__item--active',
          ])}
          onClick={() => setIsReportsActive(true)}
        >ОТЧЕТЫ</div>
      </div>
      {isReportsActive ? (
          <div className="detail-report d-flex flex-column">
            <div className="detail-report__title">Сентябрь</div>
            <div className="detail-report__description">
              В сентябре в Службе помощи людям с БАС было зарегистрировано 808 пациентов, 43 из них были зарегистрированы в этом месяце. У Фонда есть специалисты, которые оказывают им своевременную медицинскую помощь: физический терапевт провел 27 консультаций для подопечных, невролог — 31 консультацию, логопед — 20, медицинский консультант — 51, пульмонолог — 10, эрготерапевт — 11, психолог — 49, нутрициолог — 13, реаниматолог — 5. Еще 2  человека получили помощь в установке гастростомы.
            </div>
            <div className="detail-report__description">
              Многие семьи нуждаются в социальной помощи в уходе за своими близкими. Так, в сентябре 24 семьи нуждалась в помощи сиделок. Эти прекрасные, профессиональные и отзывчивые люди совершили 200 визитов — 800 часов патронажного ухода. Патронажная сестра дала 75 консультаций и вышла на дом к пациентам 24 раза, а специалист по социальным вопросам проконсультировал 59 подопечных Фонда и их родственников по различным правовым вопросам.
            </div>
            <div className="d-flex flex-column detail-report__months">
              {['Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'].map((n, index) => (
                  <div className="detail-report__months__text">
                    {n}
                  </div>
              ))}
            </div>
            <div className="detail-report__doc d-flex flex-column align-items-center">
              <div className="detail-report__doc__title">ДОКУМЕНТЫ 📄</div>
              <div className="detail-report__doc__text">В данном документе вы можете посмотреть полную отчетность</div>
              <button className="detail-report__doc__btn">Скачать</button>
            </div>
          </div>
      ) : (
          <div className="d-flex flex-column align-items-center">
            <div className="detail-video">
              {item.video &&
              <div className="video-block">
                <div className="video-block__gradient">
                  {
                    isPlayActive ?
                        <div
                            className="video-block__gradient__pause"
                            onClick={onPauseClick}
                        /> :
                        <div
                            className="video-block__gradient__play d-flex align-items-center"
                            onClick={onPlayClick}
                        >
                          <img src={play} alt="play"/>
                        </div>
                  }
                </div>
                <ReactPlayer
                    playing={isPlayActive}
                    muted
                    loop
                    config={{
                      youtube: {
                        playerVars: {
                          rel: 0,
                          ecver: 2,
                        },
                      },
                    }}
                    height={343}
                    width="100%"
                    className="video-block__video"
                    url={toUrl(item.video)}
                />
              </div>
              }
            </div>
            <div className="detail-info">
              <div className="detail-info__title">{item.small_description}</div>
              <div className="detail-info__text">{item.description}</div>
            </div>
          </div>
      )}
    </div>
  );
};
