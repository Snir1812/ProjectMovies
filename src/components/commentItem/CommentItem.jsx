import React from "react";
import "./CommentItem.css";
// import { useDispatch } from "react-redux";

const CommentItem = (m) => {
  //   const dispatch = useDispatch();

  return (
    <div className="comment-item">
      <p>Movie's name : {m.MovieName}</p>
      <p>Your opinion : {m.YourOpinion}</p>
      <p>Date : {m.Date}</p>
    </div>
  );
};

export default CommentItem;
