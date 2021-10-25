import * as React from 'react';
import '../index.scss';
import closeIcon from '../../../assets/images/close-dd.svg';
import openIcon from '../../../assets/images/plus-icon.svg';
import {useState} from "react";
import classNames from "classnames";

export const FaqItem = (props) => {
  const { item } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="faq-item d-flex flex-column" onClick={() => setIsActive(!isActive)}>
      <div className="d-flex justify-content-between align-items-start">
        <div className={classNames(['faq-item__title', isActive && 'faq-item__title--active'])}>{item.title}</div>
        {isActive ? (
          <img src={closeIcon} alt="close" className="faq-item__close"/>
        ) : (
          <img src={openIcon} alt="close" className="faq-item__open"/>
        )}
      </div>
      {isActive && <div className="faq-item__desc">{item.description}</div>}
    </div>
  );
};
