import React from "react";
import SearchBar from "../Sidebar/searchbar";
import ConvoList from "../Sidebar/convolist";
import Logoutbtn from "../Sidebar/logout";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SearchBar />

      <ConvoList />
      <Logoutbtn />
    </div>
  );
};

export default SideBar;
