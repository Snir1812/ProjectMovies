import React from "react";
// import { useState } from "react";
import { addComment } from "../../features/comments/comments-slice";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
// import "../Comments.css";
import "./AddComment.css";
import { useSelector } from "react-redux";

const AddComment = () => {
  const dispatch = useDispatch();
  const darkToggle = useSelector((state) => state.theme);

  // const [MovieName, setMovieName] = useState("");
  // const [YourOpinion, setYourOpinion] = useState("");
  // const [Date, setDate] = useState("");

  // const handleAddComment = () => {
  //   dispatch(addComment(MovieName, YourOpinion, Date));
  //   console.log("sorted");
  //   // console.log(title);
  // };

  const addCommentSubmit = (e) => {
    e.preventDefault();
    let MovieName = e.target[0].value;
    let YourOpinion = e.target[1].value;
    let Date = e.target[2].value;
    dispatch(
      addComment({
        id: v4(),
        MovieName,
        YourOpinion,
        Date,
      })
    );
  };

  return (
    <form
      onSubmit={addCommentSubmit}
      className={darkToggle.darkTheme ? "add-comment-dark" : "add-comment"}
    >
      <h4>New Comment</h4>
      <div className="input-label-add">
        <label>Movie's Name</label>
        <input
          required
          type="text"
          className={
            darkToggle.darkTheme
              ? "add-input-dark text-center"
              : "add-input text-center"
          }
        />
      </div>
      <div className="input-label-add">
        <label>Your opinion</label>
        <input
          required
          type="text"
          className={
            darkToggle.darkTheme
              ? "add-input-dark text-center"
              : "add-input text-center"
          }
        />
      </div>
      <div className="input-label-add">
        <label>Date</label>
        <input
          required
          type="date"
          className={
            darkToggle.darkTheme
              ? "add-input-dark text-center"
              : "add-input text-center"
          }
        />
      </div>
      <button
        type="submit"
        className={darkToggle.darkTheme ? "add-button-dark" : "add-button"}
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
