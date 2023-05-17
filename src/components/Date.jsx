import React, { useContext } from "react";
import { ThemeContext } from "./Homepage";

const dateData = [
  { date: "07", day: "mon" },
  { date: "08", day: "tue" },
  { date: "09", day: "wed" },
  { date: "10", day: "thu" },
  { date: "11", day: "fri" },
  { date: "12", day: "sat" },
  { date: "13", day: "sun" },
];

function Date() {
  const { dateColor } = useContext(ThemeContext);
  return (
    <ul className="flex justify-around text-5xl font-bold gap-2 pt-5 pb-5">
      {dateData.map((date, index) => (
        <li
          key={index}
          className="flex flex-col justify-center items-center w-100"
        >
          <p className={`text-${dateColor}`}>{date.date}</p>
          <p className={`text-${dateColor} text-xl`}>{date.day}</p>
          <div className={`h-5 w-1 bg-${dateColor}`}></div>
        </li>
      ))}
    </ul>
  );
}

export default Date;
