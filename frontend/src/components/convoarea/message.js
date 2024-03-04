import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatDistanceToNow } from "date-fns";

function Message({ data }) {
  const { user } = useContext(AuthContext);
  const fromme = data.senderId === user._id;
  const classname = fromme ? "bubble right" : "bubble left";
  return (
    <>
      <div className={classname}>{data.message}</div>
      <p className={fromme ? "rightt" : "leftt"}>
        {formatDistanceToNow(new Date(data.createdAt), {
          addSuffix: true,
        })}
      </p>
    </>
  );
}

export default Message;
