import React, { useState } from "react";
import Side from "./Side";
import SideThin from "./SideThin";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className={`bg-${bgColor} shadow-lg shadow-black w-100 h-90vh rounded-3xl relative flex`}
    >
      <SideThin />
      <Side />
      <div>
        <h1 className={`text-${fontColor} `}>Hello World</h1>
      </div>
    </div>
  );
}

export default Homepage;
