import React from "react";
import Avatar from "./Avatar";

function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Avatar src={user.avatarUrl} alt={user.name} />
      <span><strong>{user.name}</strong></span>
    </div>
  );
}

export default UserInfo;
