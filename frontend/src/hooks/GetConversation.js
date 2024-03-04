import { useEffect, useState } from "react";

const useGetConversation = () => {
  const [loading, setLoading] = useState("");
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await fetch("http://localhost:4001/user/convo", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        const data = await res.json();
        console.log("Inside getConversation, data:", data);
        if (!res.ok) {
          throw Error(data.error);
        }
        setConversation(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversation };
};

export default useGetConversation;
