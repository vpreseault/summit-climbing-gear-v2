"use client";

import React, { useState } from "react";
import CommentList from "../components/CommentList";

const CommentSection = () => {
  //   const [comments, setComments] = useState<string[]>([]);
  //   const [newComment, setNewComment] = useState("");

  //   const handleAddComment = () => {
  //     if (newComment.trim()) {
  //       setComments([...comments, newComment]);
  //       setNewComment("");
  //     }
  //   };

  return (
    <div className="comment-section">
      <h2>Tell Us What You Think!</h2>
      <CommentList />
      {/* <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add your comment"
      />
      <button onClick={handleAddComment}>Submit</button>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </div> */}
    </div>
  );
};

export default CommentSection;
