import React, { useContext } from "react";
import { ThemeContext } from "./Homepage";

const timeData = [
  { time: "09", current: "am" },
  { time: "10", current: "am" },
  { time: "11", current: "am" },
  { time: "12", current: "am" },
  { time: "01", current: "pm" },
  { time: "02", current: "pm" },
  { time: "03", current: "pm" },
  { time: "04", current: "pm" },
  { time: "05", current: "pm" },
  { time: "06", current: "pm" },
  { time: "07", current: "pm" },
  { time: "08", current: "pm" },
  { time: "09", current: "pm" },
  { time: "10", current: "pm" },
  { time: "11", current: "pm" },
  { time: "12", current: "am" },
];

function TimeBar() {
  const { dateColor } = useContext(ThemeContext);
  return (
    <ul className="flex flex-col-reverse justify-start gap-5  p-3 w-24 items-baseline">
      {timeData.map((time, index) => (
        <li key={index}>
          <p className={`text-${dateColor}`}>
            {time.time} {time.current}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default TimeBar;
