import React from "react";
import ConversationBar from "../Sidebar/conversationbar";
import useGetConversation from "../../hooks/GetConversation";

const ConvoList = () => {
  const { loading, conversation } = useGetConversation();

  return (
    <div className="convolist">
      {conversation.map((convo) => {
        return (
          <>
            <div className="bar"></div>
            <ConversationBar key={convo._id} conversation={convo} />
          </>
        );
      })}
      {loading ? (
        <>
          <div className="bar"></div>
          <span className="loader"></span>
        </>
      ) : null}
    </div>
  );
};

export default ConvoList;

/*

*/
