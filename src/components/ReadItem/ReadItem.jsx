import * as React from 'react';
import './index.scss';
import classNames from "classnames";

export const ReadItem = (props) => {
  const {item} = props;
  
  return (
    <div className="read-div">
      <div
        className="read-item"
        style={{backgroundImage: `url(${item.debt_report_image.length > 0 ? item.debt_report_image[0].image : null })`}}
      >
        <div className="read-item__content d-flex flex-column">
          <div className="w-100 d-flex justify-content-end">
            <div className="read-item__g">G.</div>
          </div>
          <div className="read-item__info h-100 d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className="read-item__category">🌱 Экофилософия</div>
              <div className="read-item__square"/>
            </div>
            <div className="read-item__title">
              {item.title}
            </div>
            <div className="read-item__text mt-auto">
              2000 views  •  2 weeks ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
