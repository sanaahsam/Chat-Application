import React, { useContext } from "react";

import InputMsg from "./inputmsg";
import useConversation from "../../zustand/useConversation";
import Messagess from "./messagess";
import { SocketContext } from "../../context/socketContext";
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFaceSmileBeam,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";

function ConvoArea() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);
  const isOnline = onlineUsers.includes(selectedConversation._id);
  const { user } = useContext(AuthContext);

  return (
    <div className="convoarea">
      {!selectedConversation || selectedConversation.length === 0 ? (
        <div className="nonchat">
          <h1>
            Hii there. {user.fullName}{" "}
            <FontAwesomeIcon icon={faFaceSmileBeam} size="xl" />
          </h1>
          <h1>
            Have Fun !!!{"  "}
            <FontAwesomeIcon
              icon={faGhost}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </h1>
          <h1>
            chat with your friends{" "}
            <FontAwesomeIcon icon={faComments} size="2xl" />
          </h1>
        </div>
      ) : (
        <>
          <header>
            <div className="pfp">
              <div className="avatarr">
                <span className={`status ${isOnline ? "active" : ""}`}></span>
                <img src={selectedConversation.profilepic} alt="pfp" />
              </div>
            </div>
            <div className="details">
              <span>{selectedConversation.fullname}</span>
              <p>{isOnline ? "Online" : "Offline"}</p>
            </div>
          </header>
          <Messagess />
          <InputMsg />
        </>
      )}
    </div>
  );
}

export default ConvoArea;
