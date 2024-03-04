import React, { createContext, useReducer } from "react";

export const MsgContext = createContext();

export const MsgReducer = (state, action) => {
  switch (action.type) {
    case "GETMSG":
      return { msgs: action.payload };
    case "SENDMSG":
      return { msgs: [...state.msgs, action.payload] };
    default:
      return state;
  }
};

export default function MsgContextProvider({ children }) {
  const [state, dispatch] = useReducer(MsgReducer, {
    msgs: [],
  });

  return (
    <MsgContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MsgContext.Provider>
  );
}
