import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  //
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser) {
        dispatch({ type: "LOGIN", payload: parsedUser });
      }
    } catch (error) {
      // Handle JSON parse error, e.g., by logging it
      console.error("Error parsing JSON from localStorage:", error);
    }
  }, []);

  //
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
