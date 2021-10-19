import * as React from 'react';
import close from "../../assets/images/close.svg";
import bookmark from "../../assets/images/bookmark.svg";
import play from "../../assets/images/polygon17.png";
import './index.scss';
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReactPlayer from 'react-player';
import {useState} from "react";
import {ModalComment} from "../ModalComment/ModalComment";

const comments = [
  {
    body: 'i still dont get why humans thought that using a super durable and long lasting material for packaging that \n' +
      'you are meant to throw away was a good idea',
    owner: 'Mustafa Myrza',
    time: '2 days ago',
  },
  {
    body: 'dont get why humans thought that using a super durable and long lasting material for packaging that \n' +
      'you are meant to throw',
    owner: 'Mustafa Myrza',
    time: '2 days ago',
  }
]

export const Modal = (props) => {
  const { open, onClose, item } = props;
  const [isPlayActive, setIsPlayActive] = useState(false);

  const onPlayClick = () => {
    setIsPlayActive(true);
  };

  const onPauseClick = () => {
    setIsPlayActive(false);
  };

  return (
    <div className={classNames(['my-modal', !open && 'my-modal--hide'])}>
      <div className="my-modal__content">
        <div className="my-modal__close" onClick={onClose}>
          <img src={close} alt="close icon" className=""/>
        </div>
        <div className="modal__content d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="modal__info d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <div className="modal__info__category">{item.category}</div>
                <div className="modal__info__time">{item.time}</div>
              </div>
              <div className="modal__info__title">
                {item.title}
              </div>
              <div className="modal__info__desc">
                {item.description}
              </div>
              <div className="mt-auto">
                <div className="modal__info__text">Поделись с друзьями :)</div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <FontAwesomeIcon className="mr-3" icon={['fab', 'facebook']} />
                    <div className="m-right-3"/>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    <div className="m-right-3"/>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </div>
                  <img src={bookmark}/>
                </div>
              </div>
            </div>
            <div className="modal__video">
              {item.videoSrc &&
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
                    url={item.videoSrc}
                  />
                </div>
              }
            </div>
          </div>
          <div className="modal-comment w-100">
            <ModalComment comments={comments}/>
          </div>
        </div>
      </div>
    </div>
  );
};
