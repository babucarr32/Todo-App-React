import React, { useState } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";
import TimeBar from "./TimeBar";
import Todo from "./Todo";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <Todo changeToDarkMode={bgColor} setChangeToDarkMode={setBgColor} />
      <div
        className={`bg-${bgColor} shadow-lg shadow-black w-100 rounded-3xl relative flex overflow-hidden`}
      >
        <SideThin />
        <Side />
        <TimeBar />
        <TaskContainer />
      </div>
    </>
  );
}

export default Homepage;
