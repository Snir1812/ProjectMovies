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
