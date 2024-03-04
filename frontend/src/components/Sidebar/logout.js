import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../context/authContext";

const Logoutbtn = () => {
  const { dispatch } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("chat-user");

    //cleaning the cookies
    document.cookie =
      "jwt=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=localhost";
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="logout">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </div>
  );
};

export default Logoutbtn;
