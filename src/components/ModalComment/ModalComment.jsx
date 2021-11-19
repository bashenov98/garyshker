import * as React from "react";
import "./index.scss";
import { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

export const ModalComment = ({ comments, activeItemId, setCommented }) => {
  const [commentValue, setCommentValue] = useState("");

  const onInputChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onCancelClick = () => {
    setCommentValue("");
  };

  const onSendClick = () => {
    const token = localStorage.getItem("token");
    if (commentValue.length > 0 && token) {
      axios
        .post(
          "http://195.210.47.160/edu/comment/",
          {
            body: commentValue,
            report: activeItemId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${token}`,
            },
          }
        )
        .then(function (response) {
            setCommented((prev) => !prev);
            setCommentValue('');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="comment-top">
        <div className="d-flex align-items-center w-100">
          <div className="comment-avatar" />
          <div className="w-100">
            <input
              className="w-100 comment-input"
              placeholder="Оставить комментарий"
              onChange={onInputChange}
              value={commentValue}
            />
          </div>
        </div>
        {commentValue && (
          <div className="comment-actions w-100 d-flex justify-content-end">
            <button
              className="comment-btn margin-right-20"
              onClick={onCancelClick}
            >
              Отмена
            </button>
            <button className="comment-btn" onClick={onSendClick}>
              Опубликовать
            </button>
          </div>
        )}
      </div>
      <div>
        {comments.reverse().map((comment, index) => (
          <div key={index} className="comment-item d-flex">
            <div className="comment-avatar" />
            <div className="comment-body">
              <div className="d-flex">
                <div className="comment-body__name">{comment.owner}</div>
                <div className="comment-body__date">{comment.time}</div>
              </div>
              <div className="comment-body__text">{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
