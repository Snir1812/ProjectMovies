import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const commentA = useSelector((s) => s.comments);
  console.log(commentA);

  return <div>{/* <div>{comments.map((m) => m.MovieName)}</div> */}</div>;
};

export default Comments;
