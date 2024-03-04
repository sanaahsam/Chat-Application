import React from "react";
import SideBar from "../components/Sidebar/sidebar";
import ConvoArea from "../components/convoarea/convoarea";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <ConvoArea />
    </div>
  );
}

export default Home;
