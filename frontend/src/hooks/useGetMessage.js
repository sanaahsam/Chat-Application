import { useContext, useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { MsgContext } from "../context/msgContext";

const useGetMessage = () => {
  const [loading, setLoading] = useState("");
  const { dispatch } = useContext(MsgContext);
  const { selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:4001/message/${selectedConversation._id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const data = await res.json();
        console.log("data received:", data);
        if (!res.ok) {
          console.log(data.error);
        }
        dispatch({ type: "GETMSG", payload: data });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMessage();
  }, [selectedConversation._id, dispatch]);

  return { loading };
};

export default useGetMessage;
