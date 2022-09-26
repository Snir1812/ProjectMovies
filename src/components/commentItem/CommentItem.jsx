import React from "react";
// import EditComment from "../editComment/EditComment";
import "./CommentItem.css";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CommentItem = (m) => {
  //   const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div
      className={darkToggle.darkTheme ? "comment-item-dark" : "comment-item"}
    >
      <p>Movie's name : {m.MovieName}</p>
      <p>Your opinion : {m.YourOpinion}</p>
      <p>Date : {m.Date}</p>
      {/* <EditComment /> */}
    </div>
  );
};

export default CommentItem;
