import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

export const useSignupHook = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    try {
      const response = await fetch("http://localhost:4001/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        setLoading(true);
        setError(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      console.log(state);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { Loading, signup, error };
};

export default useSignupHook;
