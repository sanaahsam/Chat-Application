import React, { useState } from "react";
import useMessage from "../../hooks/useMessage";

const InputMsg = () => {
  const [msg, setMsg] = useState("");
  const { loading, setLoading, sendMessage } = useMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (msg === "") {
      return;
    }

    try {
      setLoading(true);

      await sendMessage(msg);

      setMsg("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="inputmsg" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type message"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
      />
      <button type="submit">Send</button>
      {loading ? (
        <>
          <div className="bar"></div>
          <span className="loader"></span>
        </>
      ) : null}
    </form>
  );
};

export default InputMsg;
