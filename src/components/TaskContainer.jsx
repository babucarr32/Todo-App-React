import React from "react";
import Task from "./Task";
import DateComponent from "./DateComponent";

function TaskContainer() {
  return (
    <div className="flex flex-col  gap-2 w-100 justify-between">
      <DateComponent />
      <div className="flex gap-2 items-end pl-2 pr-2 h-100">
        <Task height="h-100" width="w-100" bgColor={"bg-purple-400"} />
        <Task height="h-70vh" width="w-100" bgColor={"bg-yellow-400"} />
        <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
        <Task height="h-60" width="w-100" bgColor={"bg-pink-400"} />
        <Task height="h-96" width="w-100" bgColor={"bg-red-400"} />
        <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
        <Task height="h-60" width="w-100" bgColor={"bg-pink-400"} />
      </div>
    </div>
  );
}

export default TaskContainer;
