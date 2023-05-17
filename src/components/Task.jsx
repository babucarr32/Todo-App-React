import React from "react";

function Task({ width, height, bgColor, title, time }) {
  return (
    <div className={`${height} ${width} ${bgColor} rounded-t-2xl p-2`}>
      <p>{title}</p>
      <p className="font-bold">{time}</p>
    </div>
  );
}

export default Task;
