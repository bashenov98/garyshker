import React, { useState, useEffect } from 'react';
import axios from "axios";
import close from "../../assets/images/close.svg";
import bookmark from "../../assets/images/bookmark.svg";
import play from "../../assets/images/polygon17.png";
import facebook from "../../assets/images/001-facebook.svg";
import insta from "../../assets/images/004-instagram.svg";
import twit from "../../assets/images/003-twitter.svg";
import './index.scss';
import classNames from "classnames";
import ReactPlayer from 'react-player';
import {ModalComment} from "../ModalComment/ModalComment";

export const Modal = (props) => {
  const { open, onClose, item } = props;
  console.log('item', item);
  const [isPlayActive, setIsPlayActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [commented, setCommented] = useState(false);
 
  useEffect(() => {
    fetchComments();
  }, [item.id, commented])

  console.log(comments, commented)

  const fetchComments = () => {
    axios
      .get("http://195.210.47.160/edu/comments")
      .then(function (response) {
        setComments(response.data.filter(({ report }) => report === +item.id));
      })
      .catch(function (error) {})
      .then(function () {});
  };

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
                <div className="modal__info__category">{item.category.name}</div>
          {/* <div className="modal__info__time">{item.time}</div>       */}
              </div>
              <div className="modal__info__title">
                {item.title}
              </div>
              <div className="modal__info__desc">
                {item.body.substring(0, 10)}
              </div>
              <div className="mt-auto">
                <div className="modal__info__text">Поделись с друзьями :)</div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={facebook} alt="facebook icon"/>
                    <div className="m-right-3"/>
                    <img src={twit} alt="twitter icon"/>
                    <div className="m-right-3"/>
                    <img src={insta} alt="instagram icon"/>
                  </div>
                  <img src={bookmark}/>
                </div>
              </div>
            </div>
            <div className="modal__video">
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
                    autoPlay
                    height={343}
                    width="100%"
                    className="video-block__video"
                    url={`http://195.210.47.160${item.video}`}
                  />
                </div>
              }
            </div>
          </div>
          <div className="modal-comment w-100">
            <ModalComment activeItemId={item.id} comments={comments} setCommented={setCommented} />
          </div>
        </div>
      </div>
    </div>
  );
};
