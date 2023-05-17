import React from "react";
import { timeData } from "./TimeBar";

function Task({ width, height, bgColor, title, time }) {
  const splitTimeFormat = time.split(" ")[1];
  const splitTime = time.split(":")[0];

  const timeFinder = timeData.find(
    (time) =>
      time.time === splitTime && time.current === splitTimeFormat.toLowerCase()
  );

  height = parseInt(timeFinder.id) * 6.25;

  return (
    <div
      style={{ height: `${height}%` }}
      className={` ${width} ${bgColor} rounded-t-2xl p-2`}
    >
      <p>{title}</p>
      <p className="font-bold">{time}</p>
    </div>
  );
}

export default Task;
