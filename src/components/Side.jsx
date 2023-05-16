import React from "react";
import SideCard from "./SideCard";

function Side() {
  return (
    <div className={`bg-black p-5 w-80`}>
      <SideCard />
      <SideCard />
      <SideCard />
    </div>
  );
}

export default Side;
