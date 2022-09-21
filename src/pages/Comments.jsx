import React from "react";
import { useSelector } from "react-redux";
import AddComment from "../components/addComment/AddComment";
import CommentItem from "../components/commentItem/CommentItem";
import "../components/Comments.css";

const Comments = () => {
  const commentA = useSelector((s) => s.comments.comments);

  // console.log(MovieName);

  return (
    <div className="container">
      <div className="comments-list">
        <AddComment />
        {commentA.map((m) => (
          <CommentItem
            key={m.id}
            MovieName={m.MovieName}
            YourOpinion={m.YourOpinion}
            Date={m.Date}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
