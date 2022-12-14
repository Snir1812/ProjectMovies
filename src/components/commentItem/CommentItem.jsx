import React from "react";
import "./CommentItem.css";
import { useSelector } from "react-redux";

const CommentItem = (m) => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div
      className={darkToggle.darkTheme ? "comment-item-dark" : "comment-item"}
    >
      <p>Movie's name : {m.MovieName}</p>
      <p>Your opinion : {m.YourOpinion}</p>
      <p>Date : {m.Date}</p>
    </div>
  );
};

export default CommentItem;
