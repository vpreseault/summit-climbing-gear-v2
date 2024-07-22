import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "Michael Brown",
    text: "Really appreciate the detailed breakdown of the equipment needed. As a beginner, it's helpful to know exactly what to get.",
  },
  {
    name: "Emily Johnson",
    text: "I've always been intimidated by climbing, but your tips make it seem so much more approachable. Can't wait to try it out!",
  },
  {
    name: "John Smith",
    text: "This was a great read! I've been looking to get into climbing and this post gave me all the info I needed. Thanks!",
  },
  {
    name: "David Wilson",
    text: "Thanks for the insights! I've been climbing for a while, but it's always good to get a refresher on the basics and learn new ways to improve.",
  },
  {
    name: "Sarah Davis",
    text: "Great article! The tips and tricks section was particularly useful. I've been struggling with my technique, and these suggestions will definitely help.",
  },
];

const CommentList: React.FC = () => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} name={comment.name} text={comment.text} />
      ))}
    </div>
  );
};

export default CommentList;
