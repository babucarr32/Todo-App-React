import React, { useContext, useRef, useEffect, useState } from "react";
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
  const setDateRef = useRef();
  const [styleOnCLick, setStyleOnCLick] = useState();

  const { dateColor } = useContext(ThemeContext);
  const selectDate = (e, ID) => {
    const eTarget = dateData.map((date) => {
      if (date.date === ID) {
        e.target.style.color = "red";
        setStyleOnCLick(e);
        return e;
      }
    });
  };
  return (
    <ul className="flex justify-around text-5xl font-bold gap-2 pt-5 pb-5">
      {dateData.map((date, index) => (
        <li
          key={index}
          className="flex flex-col justify-center items-center w-100"
        >
          <p
            className={`${dateColor}`}
            onClick={(e) => selectDate(e, date.date)}
          >
            {date.date}
          </p>
          <p className={`${dateColor} text-xl`}>{date.day}</p>
          <div className={`h-5 w-1 bg-${dateColor}`}></div>
        </li>
      ))}
    </ul>
  );
}

export default Date;
