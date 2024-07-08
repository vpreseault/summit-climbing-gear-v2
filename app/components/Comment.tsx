import React from "react";
import "../globals.css";

interface CommentProps {
  name: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ name, text }) => {
  return (
    <div className="comment">
      <div className="avatar"></div>
      <div className="content">
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
