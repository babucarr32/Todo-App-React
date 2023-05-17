import React, { useEffect, useState } from "react";
import Task from "./Task";
import DateComponent from "./DateComponent";

function TaskContainer() {
  const [getTodoData, setGetTodoData] = useState([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, []);

  return (
    <div className="flex flex-col  gap-2 w-100 justify-between">
      <DateComponent />
      <div className="flex gap-2 items-end pl-2 pr-2 h-100">
        <Task height="h-100" width="w-100" bgColor={"bg-purple-200"} />
        {getTodoData.map((data) => (
          <Task height="h-70vh" width="w-100" bgColor={"bg-yellow-200"} />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
