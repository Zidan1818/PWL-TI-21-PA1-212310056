import React from "react";

const EmptyChat = () => {
  return (
    <div>
      <div className="info text-center">
        <h1>No conversation</h1>
        <p>you didnt made ant conversation yet, please seelct username</p>
        <span className="badge badge-primary">Start a chat</span>
      </div>
    </div>
  );
};

export default EmptyChat;
