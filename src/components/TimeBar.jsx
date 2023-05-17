import React, { useContext } from "react";
import { ThemeContext } from "./Homepage";

export const timeData = [
  { id: 1, time: "09", current: "am" },
  { id: 2, time: "10", current: "am" },
  { id: 3, time: "11", current: "am" },
  { id: 4, time: "12", current: "am" },
  { id: 5, time: "01", current: "pm" },
  { id: 6, time: "02", current: "pm" },
  { id: 7, time: "03", current: "pm" },
  { id: 8, time: "04", current: "pm" },
  { id: 9, time: "05", current: "pm" },
  { id: 10, time: "06", current: "pm" },
  { id: 11, time: "07", current: "pm" },
  { id: 12, time: "08", current: "pm" },
  { id: 13, time: "09", current: "pm" },
  { id: 14, time: "10", current: "pm" },
  { id: 15, time: "11", current: "pm" },
  { id: 16, time: "12", current: "am" },
];

function TimeBar() {
  const { dateColor } = useContext(ThemeContext);
  return (
    <ul className="flex flex-col-reverse justify-start gap-4  p-3 w-24 items-baseline">
      {timeData.map((time, index) => (
        <li key={index}>
          <p className={`${dateColor}`}>
            {time.time} {time.current}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default TimeBar;
