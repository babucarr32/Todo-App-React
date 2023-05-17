import React, { useState } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className={`bg-${bgColor} shadow-lg shadow-black w-100 rounded-3xl relative flex`}
    >
      <SideThin />
      <Side />
      <TaskContainer />
    </div>
  );
}

export default Homepage;
