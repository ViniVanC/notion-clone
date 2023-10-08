import React from "react";
import "./User.scss";

export const User = () => {
  return (
    <div className="user">
      <div className="user__photo">
        <img src="/images/guest.jpg" alt="no photo user" />
      </div>
      <div className="user__name">User</div>
    </div>
  );
};
