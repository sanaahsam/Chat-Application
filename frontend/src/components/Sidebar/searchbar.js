import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/GetConversation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const convo = conversation.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (search === "") {
      return;
    }

    if (convo) {
      setSelectedConversation(convo);
      setSearch("");
    } else {
      alert("User Not Found");
    }
  };

  //
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
    </form>
  );
};

export default SearchBar;
