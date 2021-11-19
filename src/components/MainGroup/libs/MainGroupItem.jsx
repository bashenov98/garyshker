import * as React from 'react';
import './index.scss';
import classNames from "classnames";

export const MainGroupItem = (props) => {
  const { item, isMarginBottom, onClickItem } = props;
  console.log('items', item)
  return (
    <div
      className={classNames(['group-item', isMarginBottom && 'mar-bot-16'])}
      style={{backgroundImage: `url(http://195.210.47.160${item.image})`}}
      onClick={() => onClickItem(item)}
    >
      <div className="group-item__content d-flex flex-column">
        <div className="group-item__g align-self-end">G.</div>
        <div className="group-item__title mt-auto">
          {item.title}
        </div>
      </div>
    </div>
  );
};
