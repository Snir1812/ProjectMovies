import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editComment } from "../features/comments/comments-slice";
import AddComment from "../components/addComment/AddComment";
import "../components/Comments.css";
import { useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const Comments = () => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState({});

  const submit = (e, YourOpinion) => {
    e.preventDefault();
    const newCommentContent = e.target[0].value;
    let newComment = { ...YourOpinion, YourOpinion: newCommentContent };
    dispatch(editComment(newComment));
    const m = editting;
    editting[m.id] = false;

    setEditting({ ...m });
  };

  useEffect(() => {
    const ids = comments.map((comment) => comment.id);
    const ed = {};
    for (let id in ids) ed[id] = false;
    setEditting(ed);
  }, [comments]);

  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className="comments-list container">
      <AddComment />
      {comments.map((m) => (
        <div
          key={m.id}
          className={
            darkToggle.darkTheme ? "comment-item-dark" : "comment-item"
          }
        >
          {editting[m.id] ? (
            <form
              onSubmit={(e) => submit(e, m)}
              className="d-flex align-items-center justify-content-center flex-column gap-2"
            >
              <div className="d-flex align-items-center justify-content-center flex-column">
                <p>Movie Name : {m.MovieName}</p>
                <p>Your opinion : {m.YourOpinion}</p>
                <p>Date : {m.Date}</p>
              </div>
              <input
                type="text"
                className="input-submit"
                placeholder={m.YourOpinion}
              />
              <button className="edit-submit">Submit</button>
            </form>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <p>Movie Name : {m.MovieName}</p>
              <p>Your opinion : {m.YourOpinion}</p>
              <p>Date : {m.Date}</p>
              <button className="edit-btn">
                <MdOutlineModeEdit
                  onClick={() => {
                    const mx = editting;
                    mx[m.id] = !mx[m.id];
                    setEditting({ ...mx });
                  }}
                />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
