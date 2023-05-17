import React from "react";

function Task({ width, height, bgColor }) {
  return (
    <div className={`${height} ${width} ${bgColor} rounded-t-2xl p-2`}>
      <p>Weekly Design</p>
      <p className="font-bold">10:02 AM</p>
    </div>
  );
}

export default Task;
