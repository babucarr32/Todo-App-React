import React, { useState, createContext } from "react";
import Side from "./Side";
import SideThin from "./SideThin";
import TaskContainer from "./TaskContainer";
import TimeBar from "./TimeBar";
import Todo from "./Todo";
import AddTask from "./AddTask";

export const ThemeContext = createContext(null);

function Homepage() {
  const [fontColor, setFontColor] = useState("text-black");
  const [bgColor, setBgColor] = useState("white");
  const [dateColor, setDateColor] = useState("text-zinc-400");
  const [addTask, setAddTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(false);
  const [getPropId, setGetPropId] = useState();
  const [rerender, setRerender] = useState(false);
  const [getTodoChart, seGetTodoChart] = useState([]);

  const [updateTitle, setUpdateTitle] = useState(null);
  const [updateTime, setUpdateTime] = useState(null);
  const [updateComment, setUpdateComment] = useState();

  const [secondBgColor, setSecondBgColor] = useState("bg-white");

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
        setAddTask,
        addTask,
        updateTitle,
        updateTime,
        updateComment,
        updateTask,
        getPropId,
        rerender,
        getTodoChart,
        seGetTodoChart,
        setUpdateTitle,
        setUpdateTime,
        setUpdateComment,
        setUpdateTask,
        setGetPropId,
        setRerender,
      }}
    >
      <div className={`${secondBgColor}  h-100 p-28 pt-10`}>
        <Todo
          changeToDarkMode={bgColor}
          setChangeToDarkMode={setBgColor}
          setSecChangeToDarkMode={setSecondBgColor}
        />
        <div
          className={`bg-${bgColor} shadow-lg shadow-black rounded-3xl relative flex overflow-hidden`}
        >
          <SideThin />
          <Side />
          <TimeBar />
          <TaskContainer />
          {addTask && <AddTask />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Homepage;
