import React, { useEffect, useState, useContext } from "react";
import Task from "./Task";
import DateComponent from "./DateComponent";
import { ThemeContext } from "./Homepage";

const bgColorThemes = [
  "bg-red-400",
  "bg-cyan-400",
  "bg-pink-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-violet-400",
  "bg-indigo-400",
];

var currentHour = "23";
var vhValue = (currentHour - 8) * 10;
if (vhValue < 0) {
  vhValue = 0;
} else if (vhValue > 100) {
  vhValue = 100;
}
var cssValue = vhValue + "vh";

function TaskContainer() {
  const [getTodoData, setGetTodoData] = useState([]);
  const { addTask } = useContext(ThemeContext);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [addTask]);

  return (
    <div className="flex flex-col h-80vh gap-2 w-100 justify-between">
      <DateComponent />
      <div className="flex gap-2 items-end pl-2 pr-2 h-100">
        {getTodoData.map((todo, index) => (
          <Task
            key={index}
            title={todo.title}
            time={todo.time}
            height={todo.time}
            width="w-100"
            bgColor={
              bgColorThemes[Math.floor(Math.random() * bgColorThemes.length)]
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
