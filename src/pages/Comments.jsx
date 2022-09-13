import React from "react";
import { useSelector } from "react-redux";
import CommentItem from "../components/commentItem/CommentItem";
import "../components/Comments.css";

const Comments = () => {
  const commentA = useSelector((s) => s.comments.comments);
  // console.log(commentA);  console.log(comments.MovieName);

  return (
    <div className="container">
      <div className="comments-list">
        {commentA.map((m) => (
          <CommentItem
            // key={m.key}
            MovieName={m.MovieName}
            YourOpinion={m.YourOpinion}
            Date={m.Date}
          />
        ))}
        <div className="add-comment">
          <h4>Add your commant : </h4>
          <input
            type="text"
            placeholder="Movie's name"
            className="add-input text-center"
          />
          <input
            type="text"
            placeholder="Your opinion"
            className="add-input text-center"
          />
          <input
            type="text"
            placeholder="Date"
            className="add-input text-center"
          />
          <button className="add-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
