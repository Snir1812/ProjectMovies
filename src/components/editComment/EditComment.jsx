import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editComment } from "../../features/comments/comments-slice";

const EditComment = ({ m }) => {
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const [editting, setEditting] = useState({});

  const submit = (e, YourOpinion) => {
    e.preventDefault();
    const newCommentContent = e.target[0].value;
    let newComment = { ...YourOpinion, YourOpinion: newCommentContent };
    dispatch(editComment(newComment));
    const mA = editting;
    editting[mA.id] = false;

    setEditting({ ...mA });
  };
  useEffect(() => {
    const ids = comments.map((m) => m.id);
    const ed = {};
    for (let id in ids) ed[id] = false;
    setEditting(ed);
  }, [comments]);

  return (
    <div>
      {comments.map((m) => (
        <div>
          {editting[m.id] ? (
            <form onSubmit={(e) => submit(e, m)}>
              <input type="text" placeholder={m.YourOpinion} />
              <button>click here</button>
            </form>
          ) : (
            <div className="card_edit">
              <span>
                <p className="comment">{m.YourOpinion}</p>
                <div className="btn_style">
                  <div>
                    <button
                      onClick={() => {
                        const mx = editting;
                        mx[m.id] = !mx[m.id];
                        setEditting({ ...mx });
                      }}
                    >
                      edit
                    </button>
                  </div>
                </div>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default EditComment;
