import { useContext, useState } from "react";
import useConversation from "../zustand/useConversation";
import { MsgContext } from "../context/msgContext";

const useMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();
  const { dispatch } = useContext(MsgContext);

  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4001/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.log(data.error);
      }
      if (response.ok) {
        dispatch({ type: "SENDMSG", payload: data });
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage, setLoading };
};

export default useMessage;
