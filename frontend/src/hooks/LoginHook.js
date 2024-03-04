import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const useLoginHook = () => {
  const [Loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const login = async ({ fullname, username, password }) => {
    try {
      const response = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password }),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        setLoading(true);
        setError(data.error);
        return;
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { Loading, login, error };
};

export default useLoginHook;
