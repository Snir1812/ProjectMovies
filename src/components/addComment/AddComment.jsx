import React from "react";
import { useState } from "react";
import { addComment } from "../../features/comments/comments-slice";
import { useDispatch } from "react-redux";
import "../Comments.css";

const AddComment = () => {
  const dispatch = useDispatch();

  const [MovieName, setMovieName] = useState("");
  const [YourOpinion, setYourOpinion] = useState("");
  const [Date, setDate] = useState("");

  const handleAddComment = () => {
    dispatch(addComment(MovieName, YourOpinion, Date));
    console.log("sorted");
    // console.log(title);
  };

  return (
    <div className="add-comment">
      <h4>Add your commant : </h4>
      <input
        type="text"
        placeholder="Movie's name"
        className="add-input text-center"
        onChange={setMovieName}
      />
      <input
        type="text"
        placeholder="Your opinion"
        className="add-input text-center"
        onChange={setYourOpinion}
      />
      <input
        type="text"
        placeholder="Date"
        className="add-input text-center"
        onChange={setDate}
      />
      <button className="add-button" onClick={handleAddComment}>
        Submit
      </button>
    </div>
  );
};

export default AddComment;
