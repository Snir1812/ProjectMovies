// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { useState, useEffect } from "react";

// const EditComment = () => {
//   const comments = useSelector((state) => state.commentsReducer.comments);
//   const [editting, setEditting] = useState({});
//   //   const dispatch = useDispatch();

//   useEffect(() => {
//     const ids = comments.map((comment) => comment.id);
//     const ed = {};
//     for (let id in ids) ed[id] = false;
//     setEditting(ed);
//   }, [comments]);
//   return (
//     <button>
//       {editting[comment.id] ? (
//         <input type="text" placeholder={comment.comment} />
//       ) : (
//         <span>
//           {comment.userName} ~{comment.comment}
//         </span>
//       )}
//       <MdOutlineModeEdit
//         onClick={() => {
//           const m = editting;
//           m[comment.id] = !m[comment.id];
//           setEditting({ ...m });
//         }}
//       />
//     </button>
//   );
// };

// export default EditComment;
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deleteComment,
} from "../../features/comments/comments-slice";
import { v4 } from "uuid";
// import { IconTrash, IconEdit } from "@tabler/icons";
import { useEffect } from "react";
// import "../CssControls/comment.css";
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
  // console.log(MovieName);

  return (
    <div /*key={m.writerName + comment.date}*/>
      {comments.map((m) => (
        <div>
          {editting[m.id] ? (
            <form onSubmit={(e) => submit(e, m)}>
              <input type="text" placeholder={m.YourOpinion} />
              <button className="btn btn">click here</button>
            </form>
          ) : (
            <div className="card_edit">
              <span>
                {/* <div className="user_name">{m.MovieName}</div> */}
                <p className="comment">{m.YourOpinion}</p>
                {/* <div className="data">{m.Date}</div> */}
                <div className="btn_style">
                  {/* <div>
                      <IconTrash
                        onClick={() => {
                          dispatch(deleteComment(comment.id));
                        }}
                      /> */}
                  {/* </div> */}
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
