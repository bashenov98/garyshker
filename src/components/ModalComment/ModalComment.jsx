import * as React from 'react';
import './index.scss';
import {useState} from "react";

export const ModalComment = (props) => {
  const {comments} = props;
  const [commentValue, setCommentValue] = useState('');

  const onInputChange = (e) => {
    setCommentValue(e.target.value);
  }

  const onCancelClick = () => {
    setCommentValue('');
  }

  const onSendClick = () => {
    console.log('commentValue', commentValue);
  }

  return (
    <div>
      <div className="comment-top">
        <div className="d-flex align-items-center w-100">
          <div className="comment-avatar"/>
          <div className="w-100">
            <input
              className="w-100 comment-input"
              placeholder="Оставить комментарий"
              onChange={onInputChange}
              value={commentValue}
            />
          </div>
        </div>
        {commentValue &&
          <div className="comment-actions w-100 d-flex justify-content-end">
            <button className="comment-btn margin-right-20" onClick={onCancelClick}>Отмена</button>
            <button className="comment-btn" onClick={onSendClick}>Опубликовать</button>
          </div>
        }
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item d-flex">
            <div className="comment-avatar"/>
            <div className="comment-body">
              <div className="d-flex">
                <div className="comment-body__name">{comment.owner}</div>
                <div className="comment-body__date">{comment.time}</div>
              </div>
              <div className="comment-body__text">
                {comment.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
