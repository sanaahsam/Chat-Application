import { useContext, useEffect } from "react";
import { SocketContext } from "../context/socketContext";

import { MsgContext } from "../context/msgContext";

const useListenMessages = () => {
  const { socket } = useContext(SocketContext);
  const { msgs, dispatch } = useContext(MsgContext);

  useEffect(() => {
    socket.on(
      "newMessage",
      (newMessage) => {
        dispatch({ type: "SENDMSG", payload: newMessage });
      },
      [msgs]
    );

    return () => socket?.off("newMessage");
  }, [socket, dispatch, msgs]);
};

export default useListenMessages;
