import * as React from 'react';
import './index.scss';
import classNames from "classnames";
import {MainGroupItem} from "./libs/MainGroupItem";

export const MainGroup = (props) => {
  const { isColumnReverse, isRowReverse, items, onItemClick} = props;
  return (
    <div className={classNames(['main-group d-flex flex-column justify-content-between', isColumnReverse && 'flex-column-reverse'])}>
      <div className={classNames(['main-group__big', !isColumnReverse ? 'mar-bot-16' : 'mar-top-16'])}>
        <MainGroupItem item={items && items[0]} onClickItem={onItemClick}/>
      </div>
      <div className={classNames('main-group__list d-flex', isRowReverse && 'flex-row-reverse')}>
        <div
           className={classNames(['main-group__list__one', isRowReverse ? 'mar-left-16' : 'mar-right-16'])}
        >
          <MainGroupItem item={items && items[1]} onClickItem={onItemClick}/>
        </div>
        <div className="main-group__list__two d-flex flex-column">
          <MainGroupItem item={items && items[1]} onClickItem={onItemClick} isMarginBottom/>
          <MainGroupItem item={items && items[0]} onClickItem={onItemClick}/>
        </div>
      </div>
    </div>
  );
};
