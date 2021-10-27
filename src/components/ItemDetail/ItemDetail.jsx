import React, {useContext} from 'react';
import './index.scss';
import backlogo from '../../assets/images/backpack-new.png';
import play from "../../assets/images/polygon17.png";
import ReactPlayer from "react-player";
import {useState} from "react";
import {AuthContext} from "../../context";

export const ItemDetail = () => {
  const {setHideSidebar, setIsAuthPage} = useContext(AuthContext);
  setHideSidebar(false);
  setIsAuthPage(false);
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

  const onPauseClick = () => {
    setIsPlayActive(false);
  };
  return (
    <div className="detail">
      <div className="detail-item d-flex">
        <div className="detail-item__img">
          <img src={backlogo} alt="backlogo icon"/>
        </div>
        <div className="detail-item__content d-flex flex-column">
          <div className="detail-item__title">
            {itemData.title}
          </div>
          <div className="detail-item__desc">
            {itemData.description}
          </div>
          <div className="detail-item__bottom mt-auto d-flex flex-column">
            <div className="position-relative w-100">
              <div className="detail-item__slider detail-item__slider--full"/>
              <div className="detail-item__slider detail-item__slider--active" style={{width: `${Number(itemData.collected) * 100 / Number(itemData.necessary)}%`}}/>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-auto">
              <div className="text-center">
                <div className="detail-item__price-title">СОБРАНО</div>
                <div className="detail-item__price-amount">{itemData.collected} kzt</div>
              </div>
              <div className="detail-item__price-divider"/>
              <div className="text-center">
                <div className="detail-item__price-title">НУЖНО</div>
                <div className="detail-item__price-amount">{itemData.necessary} kzt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-btns d-flex">
        <div className="detail-btns__item detail-btns__item--active w-50">ОПИСАНИЕ</div>
        <div className="detail-btns__item detail-btns__item--right w-50">ОТЧЕТЫ</div>
      </div>
      <div className="detail-video">
        {itemData.videoSrc &&
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
            url={itemData.videoSrc}
          />
        </div>
        }
      </div>
      <div className="detail-info">
        <div className="detail-info__title">{itemData.infoTitle}</div>
        <div>
          {itemData.infoTexts.map((text, index) => (
            <div className="detail-info__text" key={index}>{text}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
