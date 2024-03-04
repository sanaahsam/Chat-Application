import React, { useContext, useEffect, useRef } from "react";
import Message from "./message";
import useGetMessage from "../../hooks/useGetMessage";
import { MsgContext } from "../../context/msgContext";

import useListenMessages from "../../hooks/useListenMessage";

function Messagess() {
  const { loading } = useGetMessage();
  const { msgs } = useContext(MsgContext);
  console.log("message", msgs);
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [msgs]);
  return (
    <div className="messages">
      {!loading &&
        msgs.length > 0 &&
        msgs.map((msg) => {
          return (
            <div key={msg._id} ref={lastMessageRef}>
              <Message data={msg} />
            </div>
          );
        })}

      {!loading && msgs.length === 0 && (
        <p>Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messagess;
