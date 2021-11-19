import * as React from 'react';
import classNames from "classnames";
import './index.scss';
import { useHistory } from 'react-router';

const url = "http://195.210.47.160";

export const PopularItem = (props) => {
  const {item, onClickItem}  = props;
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`reading/${item.id}`);
  }
  // onClick={() => onClickItem(item)}
  return (
    <div className="popular-div" onClick={handleCardClick}>
      <div
        className={classNames(['popular-item', item?.type === 'video' && 'popular-item--video'])}
        style={{backgroundImage: `url(${item?.debt_report_image.length > 0 ? item.debt_report_image[0].image : item.image})`}}
      >
        <div className="popular-item__g">G.</div>
        <div className="d-flex flex-column popular-item__content">
          <div className="popular-items__title">
            {item.title}
          </div>
          <div className="popular-item__info d-flex align-items-center mt-auto">
            <div className="popular-item__info__left d-flex align-items-center justify-content-center">
              <div>🙏</div>
            </div>
            <div className="d-flex flex-column">
              <div className="popular-item__info__title">{item.category.name}</div>
              {/* <div className="popular-item__info__subtitle">7 mins  •  1 weeks ago</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
