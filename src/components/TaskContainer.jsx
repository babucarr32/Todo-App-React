import React from "react";
import Task from "./Task";
import DateComponent from "./DateComponent";

function TaskContainer() {
  return (
    <div className="flex flex-col  gap-2 w-100 justify-between">
      <DateComponent />
      <div className="flex gap-2 items-end pl-2 pr-2 h-100">
        <Task height="h-100" width="w-100" bgColor={"bg-purple-200"} />
        <Task height="h-70vh" width="w-100" bgColor={"bg-yellow-200"} />
        <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-200"} />
        <Task height="h-60" width="w-100" bgColor={"bg-pink-200"} />
        <Task height="h-96" width="w-100" bgColor={"bg-red-200"} />
        <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-200"} />
        <Task height="h-60" width="w-100" bgColor={"bg-pink-200"} />
      </div>
    </div>
  );
}

export default TaskContainer;
