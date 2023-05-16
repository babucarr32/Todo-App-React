import React, { useState } from "react";

function Homepage() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className={`bg-${bgColor} shadow-lg shadow-black w-100 h-90vh rounded-3xl`}
    >
      <h1 className={`text-${fontColor} `}>Hello World</h1>
    </div>
  );
}

export default Homepage;
