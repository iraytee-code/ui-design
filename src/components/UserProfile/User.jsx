import React from "react";

const User = ({ buisness, username, image, alt }) => {
  return (
    <div className="user-profile d-flex align-item-center">
      <img
        className="user-avatar border border-primary border-3 rounded rounded-3 mx-1"
        src={image}
        alt={alt}
        style={{ width: 50, height: 50 }}
      />
      <div className="text text-light">
        <div className="text text-light">{username}</div>
        <div className="text-muted m-0 p-0">{buisness}</div>
      </div>
    </div>
  );
};

export default User;
