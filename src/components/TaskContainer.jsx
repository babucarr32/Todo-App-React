import React from "react";
import Task from "./Task";

function TaskContainer() {
  return (
    <div className="flex gap-2 items-end pl-2 pr-2 w-100">
      <Task height="h-90vh" width="w-100" bgColor={"bg-purple-400"} />
      <Task height="h-70vh" width="w-100" bgColor={"bg-yellow-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
      <Task height="h-60" width="w-100" bgColor={"bg-pink-400"} />
      <Task height="h-96" width="w-100" bgColor={"bg-red-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
      <Task height="h-90vh" width="w-100" bgColor={"bg-purple-400"} />
      <Task height="h-70vh" width="w-100" bgColor={"bg-yellow-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
      <Task height="h-60" width="w-100" bgColor={"bg-pink-400"} />
      <Task height="h-96" width="w-100" bgColor={"bg-red-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
      <Task height="h-60vh" width="w-100" bgColor={"bg-cyan-400"} />
    </div>
  );
}

export default TaskContainer;
