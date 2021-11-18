import * as React from 'react';
import './index.scss';

const url = "http://195.210.47.160";

export const WatchItem = (props) => {
  const {item} = props;

  return (
    <div className="watch-div">
      <div className="watch-item">
        <div className="watch-item__img" style={{backgroundImage: `url(http://195.210.47.160${item.image})`}}>
        </div>
        <div className="watch-item__content d-flex flex-column">
          <div className="d-flex justify-content-end">
            <div className="watch-item__g">
              G.
            </div>
          </div>
          <div className="watch-item__info h-100 d-flex flex-column">
            <div className="d-flex align-items-center">
              <div className="read-item__category">🌱 Экофилософия</div>
              <div className="read-item__square"/>
            </div>
            <div className="read-item__title">
              {item.title}
            </div>
            <div className="watch-item__text mt-auto">
              2000 views  •  2 weeks ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
