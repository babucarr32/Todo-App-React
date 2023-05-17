import React, { useState, createContext } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";
import TimeBar from "./TimeBar";
import Todo from "./Todo";

export const ThemeContext = createContext(null);

function Homepage() {
  const [fontColor, setFontColor] = useState("text-black");
  const [bgColor, setBgColor] = useState("white");
  const [dateColor, setDateColor] = useState("zinc-300");

  const [secondBgColor, setSecondBgColor] = useState("white");

  return (
    <ThemeContext.Provider
      value={{
        bgColor,
        setBgColor,
        secondBgColor,
        setSecondBgColor,
        fontColor,
        setFontColor,
        dateColor,
        setDateColor,
      }}
    >
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
    </ThemeContext.Provider>
  );
}

export default Homepage;
