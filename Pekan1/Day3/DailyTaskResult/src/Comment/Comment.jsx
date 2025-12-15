import React from "react";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";

function Comment({ user, text }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      marginTop: "16px",
      borderRadius: "10px"
    }}>
      <UserInfo user={user} />
      <CommentText text={text} />
    </div>
  );
}

export default Comment;
