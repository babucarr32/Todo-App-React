import React, { useState } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";
import TimeBar from "./TimeBar";
import Todo from "./Todo";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const [secondBgColor, setSecondBgColor] = useState("white");

  return (
    <div className={`${secondBgColor}  h-100 p-28 pt-10`}>
      <Todo
        changeToDarkMode={bgColor}
        setChangeToDarkMode={setBgColor}
        setSecChangeToDarkMode={setSecondBgColor}
      />
      <div
        className={`bg-${bgColor} shadow-lg shadow-black w-100 rounded-3xl relative flex overflow-hidden`}
      >
        <SideThin />
        <Side />
        <TimeBar />
        <TaskContainer />
      </div>
    </div>
  );
}

export default Homepage;
