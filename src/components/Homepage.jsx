import React, { useState } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";
import TimeBar from "./TimeBar";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className={`bg-${bgColor} shadow-lg shadow-black w-100 rounded-3xl relative flex overflow-hidden`}
    >
      <SideThin />
      <Side />
      <TimeBar />
      <TaskContainer />
    </div>
  );
}

export default Homepage;
