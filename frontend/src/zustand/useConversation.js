import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: [],
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
}));

export default useConversation;
