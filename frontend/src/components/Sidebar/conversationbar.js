import React, { useContext, useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/socketContext";

const ConversationBar = (convo) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation._id === convo.conversation._id;
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(convo.conversation._id);

  useEffect(() => {
    setSelectedConversation([]);
  }, [setSelectedConversation]);
  return (
    <div
      className="conversationbar"
      style={
        isSelected
          ? {
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }
          : {}
      }
      onClick={() => setSelectedConversation(convo.conversation)}
    >
      <div className="avatar">
        <span className={`status ${isOnline ? "active" : ""}`}></span>
        <img src={convo.conversation.profilepic} alt="pfp" />
      </div>

      <div className="info">
        <h2>{convo.conversation.fullname}</h2>
        <span>🤨</span>
      </div>
    </div>
  );
};

export default ConversationBar;
